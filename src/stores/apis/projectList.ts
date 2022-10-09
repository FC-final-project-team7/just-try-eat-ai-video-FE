import { emptySplitApiWithReauth } from '.';
import { TProjectData } from '~/types/projects';

export const projectListApi = emptySplitApiWithReauth.injectEndpoints({
  endpoints: (build) => ({
    getProjects: build.query<TProjectData[], void>({
      query: () => ({
        url: `/projects`,
      }),
    }),
  }),
});

export const { useGetProjectsQuery } = projectListApi;
