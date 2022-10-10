import { fetchBaseQuery } from '@reduxjs/toolkit/query';
import type {
  BaseQueryFn,
  FetchArgs,
  FetchBaseQueryError,
} from '@reduxjs/toolkit/query';
import type { QueryReturnValue } from '@reduxjs/toolkit/dist/query/baseQueryTypes';
import { Mutex } from 'async-mutex';

import { Tokens } from '~/stores/token';

import { ITokenResult } from '~/types/auth';

const baseUrl = '/api';
export const getUrl = (path: string, mockWithAbsoluteURL = false) => {
  const url = mockWithAbsoluteURL
    ? new URL('/mocks/' + path.replace(/^\//, ''), location.origin).href
    : path;
  return url;
};

export const baseQuery = fetchBaseQuery({
  baseUrl,
});

export const baseQueryWithToken = fetchBaseQuery({
  baseUrl,
  prepareHeaders: (headers) => {
    const access = Tokens.access;
    if (access) {
      headers.set('authorization', `Bearer ${access}`);
    }
    return headers;
  },
});

const mutex = new Mutex();
export const baseQueryWithReauth: BaseQueryFn<
  string | FetchArgs,
  unknown,
  FetchBaseQueryError
> = async (args, api, extraOptions) => {
  await mutex.waitForUnlock();

  let result = await baseQueryWithToken(args, api, extraOptions);
  if (result.error && result.error.status === 401) {
    if (!mutex.isLocked()) {
      const release = await mutex.acquire();
      try {
        let baseUrl = '';
        // string | FetchArgs 에 맞게 추출
        if (typeof args === 'string') {
          baseUrl = args;
        } else if (typeof args === 'object') {
          baseUrl = args.url;
        }
        // 유효한 URL 주소(풀주소) 면 origin 추출
        try {
          baseUrl = new URL(baseUrl).origin;
        } catch (e) {
          baseUrl = '';
        }

        const refreshResult = (await baseQueryWithToken(
          {
            url: baseUrl + '/auth/re-issue',
            body: Tokens.getBody(),
            method: 'POST',
          },
          api,
          extraOptions
        )) as QueryReturnValue<ITokenResult>;
        if (refreshResult.data) {
          Tokens.access = refreshResult.data.accessToken;
          result = await baseQueryWithToken(args, api, extraOptions);
        } else {
          Tokens.clear();
        }
      } finally {
        release();
      }
    } else {
      await mutex.waitForUnlock();

      // 다른 곳에서 토큰이 날아갈수도 있다 특히 위에
      if (Tokens.access)
        result = await baseQueryWithToken(args, api, extraOptions);
    }
  }
  return result;
};
