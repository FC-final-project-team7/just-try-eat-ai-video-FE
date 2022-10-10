import { emptySplitApiWithReauth } from './';
import { getUrl as _getUrl } from './baseQuery';

import { PROJECT_TEXT_TAG } from './tags';
import { TProjectSentence, TProject } from '~/types/project/projects';

const getUrl = (path: string) => _getUrl(path, true);

export const projectTextApi = emptySplitApiWithReauth.injectEndpoints({
  endpoints: (build) => ({
    getProjectText: build.query<TProject, number>({
      query: (id: number) => ({ url: getUrl(`projects/${id}`) }),
      transformResponse: (response: TProject) => response,
      providesTags: (result, error, id) => [{ type: PROJECT_TEXT_TAG, id }],
    }),
    updateProjectText: build.mutation<Record<string, unknown>, TProject>({
      query: (projectText: TProject) => ({
        url: getUrl('projects/auto'),
        method: 'PUT',
        body: projectText,
      }),
      invalidatesTags: (result, error, { projectId }) => [
        { type: PROJECT_TEXT_TAG, id: projectId },
      ],
    }),
    next: build.mutation<TProjectSentence, TProject>({
      query: (projectText: TProject) => ({
        url: getUrl('projects/edit'),
        method: 'PUT',
        body: projectText,
      }),
    }),
  }),
  overrideExisting: false,
});

export const { useGetProjectTextQuery } = projectTextApi;
