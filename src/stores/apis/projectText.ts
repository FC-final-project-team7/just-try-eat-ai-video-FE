import { emptySplitApiWithReauth } from './';
import { getUrl as _getUrl } from './baseQuery';

import { PROJECT_TEXT_TAG } from './tags';
import {
  IProjectTextSaveRequest,
  pickIProjectTextSaveRequest,
} from '~/types/project/projects';
import {
  IProjectSentence,
  ISentenceRequest,
  pickISentenceRequest,
} from '~/types/project/sentence';

const getUrl = (path: string) => _getUrl(path, false);

export const projectTextApi = emptySplitApiWithReauth.injectEndpoints({
  endpoints: (build) => ({
    updateProjectText: build.mutation<void, IProjectTextSaveRequest>({
      query: (projectText: IProjectTextSaveRequest) => ({
        url: getUrl('projects/auto'),
        method: 'POST',
        body: pickIProjectTextSaveRequest(projectText),
      }),
      invalidatesTags: (result, error, { projectId }) => [
        { type: PROJECT_TEXT_TAG, id: projectId },
      ],
    }),
    goToSentence: build.mutation<IProjectSentence, ISentenceRequest>({
      query: (sentenceRequest: ISentenceRequest) => ({
        url: getUrl('projects/edit'),
        method: 'PUT',
        body: pickISentenceRequest(sentenceRequest),
      }),
    }),
  }),
  overrideExisting: false,
});

export const { useUpdateProjectTextMutation } = projectTextApi;
