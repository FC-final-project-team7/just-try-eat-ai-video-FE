import { emptySplitApiWithReauth } from './';
import { getUrl as _getUrl } from './baseQuery';

import { PROJECT_TEXT_TAG } from './tags';
import {
  IProjectTextSaveRequest,
  toIProjectTextSaveRequest,
} from '~/types/project/projects';
import {
  fromIProjectSentence,
  IProjectSentence,
  ISentenceRequest,
  toISentenceRequest,
} from '~/types/project/sentence';

const getUrl = (path: string) => _getUrl(path, false);

export const projectTextApi = emptySplitApiWithReauth.injectEndpoints({
  endpoints: (build) => ({
    updateProjectText: build.mutation<void, IProjectTextSaveRequest>({
      query: (projectText: IProjectTextSaveRequest) => ({
        url: getUrl('projects/auto'),
        method: 'POST',
        body: toIProjectTextSaveRequest(projectText),
      }),
      invalidatesTags: (result, error, { projectId }) => [
        { type: PROJECT_TEXT_TAG, id: projectId },
      ],
    }),

    goToSentence: build.mutation<IProjectSentence, ISentenceRequest>({
      query: (sentenceRequest: ISentenceRequest) => ({
        url: getUrl('projects/edit'),
        method: 'PUT',
        body: toISentenceRequest(sentenceRequest),
      }),
      transformResponse: (res: IProjectSentence) => fromIProjectSentence(res),
    }),
  }),
  overrideExisting: false,
});

export const { useUpdateProjectTextMutation } = projectTextApi;
