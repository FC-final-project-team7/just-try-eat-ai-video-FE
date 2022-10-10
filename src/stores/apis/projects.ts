import { emptySplitApiWithReauth } from './';

import { PROJECT_TEXT_TAG } from './tags';

import { TProject } from '~/types/project/projects';

import { getUrl as _getUrl } from '~/stores/apis/baseQuery';
const getUrl = (path: string) => _getUrl(path, true);

export const projectsApi = emptySplitApiWithReauth.injectEndpoints({
  endpoints: (build) => ({
    getProject: build.query<TProject, number>({
      query: (id: number) => ({ url: getUrl(`projects/${id}`) }),
      transformResponse: (response: TProject) => response,
      providesTags: (result, error, id) => [{ type: PROJECT_TEXT_TAG, id }],
    }),
  }),
  overrideExisting: false,
});

export const { useGetProjectQuery } = projectsApi;
