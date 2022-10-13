import { emptySplitApiWithReauth } from './';
import { getUrl as _getUrl } from './baseQuery';

import { PROJECT_TEXT_TAG } from './tags';
import {
  IProjectSentence,
  IProjectTextSaveRequest,
  IProjectSentenceRequest,
} from '~/types/project/projects';

const getUrl = (path: string) => _getUrl(path, false);

export const projectTextApi = emptySplitApiWithReauth.injectEndpoints({
  endpoints: (build) => ({
    updateProjectText: build.mutation<void, IProjectTextSaveRequest>({
      query: (projectText: IProjectTextSaveRequest) => ({
        url: getUrl('projects/auto'),
        method: 'POST',
        body: projectText,
      }),
      invalidatesTags: (result, error, { projectId }) => [
        { type: PROJECT_TEXT_TAG, id: projectId },
      ],
    }),
    next: build.mutation<IProjectSentence, IProjectSentenceRequest>({
      query: (projectText: IProjectSentenceRequest) => ({
        url: getUrl('projects/edit'),
        method: 'PUT',
        body: projectText,
      }),
    }),
  }),
  overrideExisting: false,
});

export const { useUpdateProjectTextMutation, useNextMutation } = projectTextApi;

// 다시 만들 필요가 없음으로 reexport
import { projectsApi } from '~/stores/apis/projects';
export const { useGetProjectQuery: useGetProjectTextQuery } = projectsApi;
