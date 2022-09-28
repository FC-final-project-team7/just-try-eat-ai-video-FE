import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { PROJECT_TEXT_TAG } from './tags';

export const emptySplitApi = createApi({
  tagTypes: [PROJECT_TEXT_TAG],
  // FIXME '/mocks' 제거
  baseQuery: fetchBaseQuery({ baseUrl: '/mocks' }),
  endpoints: () => ({}),
});
