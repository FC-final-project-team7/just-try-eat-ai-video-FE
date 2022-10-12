import { emptySplitApiWithReauth } from '.';
import { PROJECT_LIST_TAG } from './tags';
import { TProjectData } from '~/types/project/projects';

export const projectCreationApi = emptySplitApiWithReauth.injectEndpoints({
  endpoints: (build) => ({
    textProject: build.mutation<TProjectData, void>({
      query: () => ({
        url: `/projects/text`,
        method: 'POST',
      }),
      invalidatesTags: () => [{ type: PROJECT_LIST_TAG }],
    }),
    audioProject: build.mutation<{ projectId: number }, FormData>({
      query: (formData) => ({
        url: '/projects/audio',
        method: 'POST',
        body: formData,
      }),
      invalidatesTags: () => [{ type: PROJECT_LIST_TAG }],
    }),
  }),
});

export const { useTextProjectMutation, useAudioProjectMutation } =
  projectCreationApi;
