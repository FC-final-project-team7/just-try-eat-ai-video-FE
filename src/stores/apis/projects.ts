import { emptySplitApiWithReauth } from './';

import { PROJECT_TEXT_TAG } from './tags';

import { IProject } from '~/types/project/projects';

import { getUrl } from '~/stores/apis/baseQuery';

export const projectsApi = emptySplitApiWithReauth.injectEndpoints({
  endpoints: (build) => ({
    getProject: build.query<IProject, number>({
      query: (id: number) => ({ url: getUrl(`projects/${id}`) }),
      transformResponse: (response: IProject) => response,
      providesTags: (result, error, id) => [{ type: PROJECT_TEXT_TAG, id }],
    }),
  }),
  overrideExisting: false,
});

export const { useGetProjectQuery } = projectsApi;
