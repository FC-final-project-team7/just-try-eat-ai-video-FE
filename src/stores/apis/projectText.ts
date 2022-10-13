import { emptySplitApiWithReauth } from './';
import { getUrl as _getUrl } from './baseQuery';

import { PROJECT_TEXT_TAG } from './tags';
import { IProjectTextSaveRequest } from '~/types/project/projects';
import { IProjectSentence, ISentenceRequest } from '~/types/project/sentence';

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
    goToSentence: build.mutation<IProjectSentence, ISentenceRequest>({
      query: (projectText: ISentenceRequest) => ({
        url: getUrl('projects/edit'),
        method: 'PUT',
        body: projectText,
      }),
    }),
  }),
  overrideExisting: false,
});

export const { useUpdateProjectTextMutation, useGoToSentenceMutation } =
  projectTextApi;
