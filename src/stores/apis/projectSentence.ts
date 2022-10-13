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
} from '~/types/project/sentence';
import { IProjectAvatar } from '~/types/project/projects';

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
            projectsApi.endpoints.getProject.initiate(projectId)
          );

          let project: Awaited<ReturnType<typeof getProject.unwrap>>;
          try {
            project = await getProject.unwrap();
          } finally {
            getProject.unsubscribe();
          }

          const getProjectSentence = dispatch(
            projectTextApi.endpoints.goToSentence.initiate(project)
          );

          let sentences: Awaited<ReturnType<typeof getProjectSentence.unwrap>>;
          try {
            sentences = await getProjectSentence.unwrap();
          } finally {
            getProjectSentence.unsubscribe();
          }

          return {
            data: sentences,
          };
        } catch (error) {
          return {
            error: error as FetchBaseQueryError,
          };
        }
      },
    }),
    createAudioSentence: build.query<
      ICreateAudioSentenceData,
      ICreateAudioSentenceData
    >({
      query: (data: ICreateAudioSentenceData) => ({
        url: 'projects/audio/sentence',
        method: 'POST',
        body: data,
      }),
    }),
    createAudioText: build.query<ICreateAudioTextData, ICreateAudioTextData>({
      query: (data: ICreateAudioSentenceData) => ({
        url: 'projects/audio/text',
        method: 'POST',
        body: data,
      }),
    }),
    goToAvatar: build.query<IProjectAvatar, IGoToAvatarRequest>({
      query: (data: ICreateAudioSentenceData) => ({
        url: 'projects/edit/audio',
        method: 'PUT',
        body: data,
      }),
    }),
  }),
  overrideExisting: false,
});
