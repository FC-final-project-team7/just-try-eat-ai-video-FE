//https://github.com/reduxjs/redux-toolkit/issues/1574#issuecomment-1157985148
// 훗날 RTK Query 가 Suspense 를 지원하면 들어내야함

// Simplified version of QueryActionCreatorResult
import { SkipToken } from '@reduxjs/toolkit/query';
import { UseQuerySubscription } from '@reduxjs/toolkit/dist/query/react/buildHooks';
import { QueryDefinition } from '@reduxjs/toolkit/dist/query/endpointDefinitions';

interface WrappedData<T> {
  data: T;
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

  const { data } = useEndpointQuery(arg, options) as WrappedData<T>;

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  let promise = api.util // @ts-ignore
    .getRunningOperationPromise(endpointName, arg) as
    | PromiseLike<WrappedData<T>>
    | undefined;

  // Promise is undefined when data is there cached locally already,
  // in this case let's have a promise resolved with the locally cached data
  if (promise === undefined) {
    promise = new Promise((resolve, reject) => {
      if (data !== undefined) {
        resolve({ data });
      } else {
        reject('Cannot get RTK Query promise and there is no data loaded yet');
      }
    });
  }

  let status = 'pending';
  let response: T;

  promise.then(
    (res: WrappedData<T>) => {
      status = 'success';
      response = res.data;
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
