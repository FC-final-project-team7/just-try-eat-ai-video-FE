import { emptySplitApiWithReauth } from '.';
import { TProjectData } from '~/types/project/projects';
import { PROJECT_LIST_TAG } from './tags';

export const projectListApi = emptySplitApiWithReauth.injectEndpoints({
  endpoints: (build) => ({
    getProjects: build.query<TProjectData[], void>({
      query: () => ({
        url: `/projects`,
      }),
      providesTags: [{ type: PROJECT_LIST_TAG }],
    }),
    deleteProject: build.mutation<TProjectData, number | string>({
      query: (id) => ({
        url: `/projects/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: () => [{ type: PROJECT_LIST_TAG }],
    }),
  }),
});

export const { useGetProjectsQuery, useDeleteProjectMutation } = projectListApi;
