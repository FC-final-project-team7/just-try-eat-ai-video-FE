//https://github.com/reduxjs/redux-toolkit/issues/1574#issuecomment-1157985148
// 훗날 RTK Query 가 Suspense 를 지원하면 들어내야함

// Simplified version of QueryActionCreatorResult
import { SkipToken } from '@reduxjs/toolkit/query';
import { UseQuerySubscription } from '@reduxjs/toolkit/dist/query/react/buildHooks';
import { QueryDefinition } from '@reduxjs/toolkit/dist/query/endpointDefinitions';
import { FetchBaseQueryError } from '@reduxjs/toolkit/src/query/fetchBaseQuery';

interface WrappedData<T> {
  data: T;
}

interface IUseQuery<T> extends WrappedData<T> {
  status: 'pending' | 'rejected' | 'fulfilled';
  error: FetchBaseQueryError;
}

export const useRtkQueryResource = <T>(
  api: unknown,
  endpointName: string,
  arg: unknown | SkipToken,
  options?: Parameters<
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    UseQuerySubscription<QueryDefinition<any, any, any, any>>
  >[1]
): never | (() => T) => {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const apiEndpointQuery = api.endpoints[endpointName];
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const useEndpointQuery = apiEndpointQuery?.useQuery;

  const queryRes = useEndpointQuery(arg, options) as IUseQuery<T>;
  const { data, error } = queryRes;

  const promise = new Promise<WrappedData<T> | IUseQuery<T>>(
    (resolve, reject) => {
      // getRunningOperationPromise 가 바로 promise 를 안 만들어 줄때가 있다
      setTimeout(() => {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        const opPromise = api.util.getRunningOperationPromise(
          endpointName,
          arg
        ) as Promise<IUseQuery<T>> | undefined;

        if (opPromise === undefined) {
          if (data !== undefined) {
            resolve({ data });
          } else {
            reject(
              error ??
                'Cannot get RTK Query promise and there is no data loaded yet'
            );
          }
        } else {
          resolve(opPromise);
        }
      });
    }
  );

  // Promise is undefined when data is there cached locally already,
  // in this case let's have a promise resolved with the locally cached data

  let status = 'pending';
  let response: T;

  promise.then(
    (res: IUseQuery<T> | WrappedData<T>) => {
      // getRunningOperationPromise 가 통신 에러는 throw 하질 않는다
      if ('error' in res) {
        status = 'error';
        // 위에 타입을 안 바꾼 이유는 실제 사용하는 곳에서는 error 가 필요가 없다
        // ErrorBoundary 에서만 쓰는데 사용하는 곳에서 타입체킹?

        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        response = res.error;
      } else {
        status = 'success';
        response = res.data;
      }
    },
    (err) => {
      status = 'error';
      response = err;
    }
  );

  return () => {
    switch (status) {
      case 'pending':
        throw promise;
      case 'error':
        throw response;
      default:
        return response;
    }
  };
};
