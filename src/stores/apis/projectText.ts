import { emptySplitApiWithReauth } from './';
import { getUrl as _getUrl } from './baseQuery';

import { PROJECT_TEXT_TAG } from './tags';
import { IProjectSentence, IProject } from '~/types/project/projects';

const getUrl = (path: string) => _getUrl(path, true);

export const projectTextApi = emptySplitApiWithReauth.injectEndpoints({
  endpoints: (build) => ({
    updateProjectText: build.mutation<Record<string, unknown>, IProject>({
      query: (projectText: IProject) => ({
        url: getUrl('projects/auto'),
        method: 'PUT',
        body: projectText,
      }),
      invalidatesTags: (result, error, { projectId }) => [
        { type: PROJECT_TEXT_TAG, id: projectId },
      ],
    }),
    next: build.mutation<IProjectSentence, IProject>({
      query: (projectText: IProject) => ({
        url: getUrl('projects/edit'),
        method: 'PUT',
        body: projectText,
      }),
    }),
  }),
  overrideExisting: false,
});

import { projectsApi } from '~/stores/apis/projects';
export const { useGetProjectQuery: useGetProjectTextQuery } = projectsApi;

// export const {} = projectTextApi;
