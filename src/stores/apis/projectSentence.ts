import {
  FetchBaseQueryError,
  FetchBaseQueryMeta,
} from '@reduxjs/toolkit/query';
import { QueryReturnValue } from '@reduxjs/toolkit/dist/query/baseQueryTypes';

import { emptySplitApiWithReauth } from './';
import { projectsApi } from './projects';
import { projectTextApi } from './projectText';

import {
  ICreateAudioSentenceData,
  ICreateAudioTextData,
  IGoToAvatarRequest,
  IProjectSentence,
  toICreateAudioSentenceData,
  toICreateAudioTextData,
  toIGoToAvatarRequest,
  toISentenceRequest,
  fromIProjectSentence,
  fromICreateAudioTextData,
} from '~/types/project/sentence';
import {
  IProjectAvatar,
  IProjectTextSaveRequest,
  toIProjectTextSaveRequest,
} from '~/types/project/projects';

export const projectSentenceApi = emptySplitApiWithReauth.injectEndpoints({
  endpoints: (build) => ({
    getSentences: build.query<IProjectSentence, number>({
      queryFn: async (
        projectId,
        { dispatch }
      ): Promise<
        QueryReturnValue<
          IProjectSentence,
          FetchBaseQueryError,
          FetchBaseQueryMeta
        >
      > => {
        try {
          const getProject = dispatch(
            projectsApi.endpoints.getProject.initiate(projectId, {
              forceRefetch: true,
            })
          );

          let project: Awaited<ReturnType<typeof getProject.unwrap>>;
          try {
            project = await getProject.unwrap();
          } finally {
            getProject.unsubscribe();
          }

          const goToSentence = dispatch(
            projectTextApi.endpoints.goToSentence.initiate(
              toISentenceRequest(project)
            )
          );

          let sentences: Awaited<ReturnType<typeof goToSentence.unwrap>>;
          try {
            sentences = await goToSentence.unwrap();
          } finally {
            goToSentence.unsubscribe();
          }

          return {
            data: fromIProjectSentence(sentences),
          };
        } catch (error) {
          return {
            error: error as FetchBaseQueryError,
          };
        }
      },
    }),
    createAudioSentence: build.mutation<
      ICreateAudioSentenceData,
      ICreateAudioSentenceData
    >({
      query: (data: ICreateAudioSentenceData) => ({
        url: 'projects/audio/sentence',
        method: 'POST',
        body: toICreateAudioSentenceData(data),
      }),
    }),
    createAudioText: build.mutation<ICreateAudioTextData, ICreateAudioTextData>(
      {
        query: (data: ICreateAudioTextData) => ({
          url: 'projects/audio/text',
          method: 'POST',
          body: toICreateAudioTextData(data),
        }),
        transformResponse: (res: ICreateAudioTextData) =>
          fromICreateAudioTextData(res),
      }
    ),
    patchAudioText: build.mutation<
      void,
      Pick<IProjectTextSaveRequest, 'projectId' | 'text' | 'audio'>
    >({
      queryFn: async (
        args,
        { dispatch }
      ): Promise<
        QueryReturnValue<void, FetchBaseQueryError, FetchBaseQueryMeta>
      > => {
        try {
          const { projectId } = args;

          const getProject = dispatch(
            projectsApi.endpoints.getProject.initiate(projectId, {
              forceRefetch: true,
            })
          );

          let project: Awaited<ReturnType<typeof getProject.unwrap>>;
          try {
            project = await getProject.unwrap();
          } finally {
            getProject.unsubscribe();
          }
          const { text, audio } = args;

          const updateProjectText = dispatch(
            projectTextApi.endpoints.updateProjectText.initiate(
              toIProjectTextSaveRequest({ ...project, text, audio })
            )
          );

          try {
            await updateProjectText.unwrap();
          } finally {
            updateProjectText.unsubscribe();
          }

          return {
            data: undefined,
          };
        } catch (error) {
          return {
            error: error as FetchBaseQueryError,
          };
        }
      },
    }),
    goToAvatar: build.mutation<IProjectAvatar, IGoToAvatarRequest>({
      query: (data: ICreateAudioSentenceData) => ({
        url: 'projects/edit/audio',
        method: 'PUT',
        body: toIGoToAvatarRequest(data),
      }),
    }),
  }),
  overrideExisting: false,
});

export const {
  useCreateAudioSentenceMutation,
  useCreateAudioTextMutation,
  usePatchAudioTextMutation,
} = projectSentenceApi;
