import {
  FetchBaseQueryError,
  FetchBaseQueryMeta,
} from '@reduxjs/toolkit/query';
import { QueryReturnValue } from '@reduxjs/toolkit/dist/query/baseQueryTypes';

import { emptySplitApi } from './';
import { baseQueryWithToken } from './baseQuery';

import { Tokens } from '~/stores/token';

import { ILogin, ITokenResult } from '~/types/auth';

export const authApi = emptySplitApi.injectEndpoints({
  endpoints: (build) => ({
    login: build.query<void, ILogin>({
      queryFn: async (
        arg,
        api,
        extraOptions,
        baseQuery
      ): Promise<
        QueryReturnValue<void, FetchBaseQueryError, FetchBaseQueryMeta>
      > => {
        const result = await baseQuery({
          url: '/auth/login',
          body: arg,
          method: 'POST',
        });
        if (result.data) {
          const data = result.data as ITokenResult;
          const { accessToken, refreshToken } = data;
          Tokens.access = accessToken;
          Tokens.refresh = refreshToken;
        }

        return {
          ...result,
          data: undefined,
        } as QueryReturnValue<void, FetchBaseQueryError, FetchBaseQueryMeta>;
      },
    }),
    logout: build.query<void, void>({
      queryFn: async (
        arg,
        api,
        extraOptions
      ): Promise<
        QueryReturnValue<void, FetchBaseQueryError, FetchBaseQueryMeta>
      > => {
        const result = await baseQueryWithToken(
          {
            url: '/auth/login',
            body: Tokens.getBody(),
            method: 'POST',
          },
          api,
          extraOptions
        );

        Tokens.clear();

        return {
          ...result,
          data: undefined,
        } as QueryReturnValue<void, FetchBaseQueryError, FetchBaseQueryMeta>;
      },
    }),
  }),
});

export const { useLazyLoginQuery, useLazyLogoutQuery } = authApi;
