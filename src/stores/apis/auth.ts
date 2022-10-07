import { emptySplitApi } from '~/stores/apis/index';
import { ILogin, ITokenResult } from '~/types/auth';
import { Tokens } from '~/stores/token';
import { QueryReturnValue } from '@reduxjs/toolkit/dist/query/baseQueryTypes';
import {
  FetchBaseQueryError,
  FetchBaseQueryMeta,
} from '@reduxjs/toolkit/query';
import { baseQueryWithToken } from '~/stores/apis/baseQuery';

export const authApi = emptySplitApi.injectEndpoints({
  endpoints: (build) => ({
    login: build.query<void, ILogin>({
      queryFn: async (arg, api, extraOptions, baseQuery) => {
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
      queryFn: async (arg, api, extraOptions) => {
        const result = await baseQueryWithToken(
          {
            body: Tokens.getBody(),
            url: '/auth/login',
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
