import { emptySplitApiWithReauth } from './';

import { PROJECT_TEXT_TAG } from './tags';
import { TProjectSentence, TProjectText } from '~/types/projects';
import { getUrl as _getUrl } from '~/stores/apis/baseQuery';

const getUrl = (path: string) => _getUrl(path, true);

export const projectTextApi = emptySplitApiWithReauth.injectEndpoints({
  endpoints: (build) => ({
    getProjectText: build.query<TProjectText, number>({
      query: (id: number) => ({ url: getUrl(`projects/${id}`) }),
      transformResponse: (response: TProjectText) => response,
      providesTags: (result, error, id) => [{ type: PROJECT_TEXT_TAG, id }],
    }),
    updateProjectText: build.mutation<Record<string, unknown>, TProjectText>({
      query: (projectText: TProjectText) => ({
        url: getUrl('projects/auto'),
        method: 'PUT',
        body: projectText,
      }),
      invalidatesTags: (result, error, { projectId }) => [
        { type: PROJECT_TEXT_TAG, id: projectId },
      ],
    }),
    next: build.mutation<TProjectSentence, TProjectText>({
      query: (projectText: TProjectText) => ({
        url: getUrl('projects/edit'),
        method: 'PUT',
        body: projectText,
      }),
    }),
  }),
  overrideExisting: false,
});

export const { useGetProjectTextQuery } = projectTextApi;
