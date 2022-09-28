import { emptySplitApi } from './';

import { PROJECT_TEXT_TAG } from './tags';
import { TProjectSentence, TProjectText } from '~/types/projects';

export const projectTextApi = emptySplitApi.injectEndpoints({
  endpoints: (build) => ({
    getProjectText: build.query<TProjectText, number>({
      query: (id: number) => ({ url: `projects/${id}` }),
      transformResponse: (response: TProjectText) => response,
      providesTags: (result, error, id) => [{ type: PROJECT_TEXT_TAG, id }],
    }),
    updateProjectText: build.mutation<Record<string, unknown>, TProjectText>({
      query: (projectText: TProjectText) => ({
        url: 'projects/auto',
        method: 'PUT',
        body: projectText,
      }),
      invalidatesTags: (result, error, { projectId }) => [
        { type: PROJECT_TEXT_TAG, id: projectId },
      ],
    }),
    next: build.mutation<TProjectSentence, TProjectText>({
      query: (projectText: TProjectText) => ({
        url: 'projects/edit',
        method: 'PUT',
        body: projectText,
      }),
    }),
  }),
  overrideExisting: false,
});

export const { useGetProjectTextQuery } = projectTextApi;
