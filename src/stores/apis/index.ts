import { createApi } from '@reduxjs/toolkit/query/react';
import { baseQuery, baseQueryWithReauth } from './baseQuery';

import { PROJECT_TEXT_TAG, PROJECT_LIST_TAG } from './tags';

export const emptySplitApi = createApi({
  reducerPath: 'emptySplitApi',
  baseQuery: baseQuery,
  endpoints: () => ({}),
});

export const emptySplitApiWithReauth = createApi({
  reducerPath: 'emptySplitApiWithReauth',
  tagTypes: [PROJECT_TEXT_TAG, PROJECT_LIST_TAG],
  baseQuery: baseQueryWithReauth,
  endpoints: () => ({}),
});
