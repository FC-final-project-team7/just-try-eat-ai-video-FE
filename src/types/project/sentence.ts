import { IProject } from '~/types/project/projects';

export interface ISentenceRequest
  extends Pick<
    IProject,
    | 'audio'
    | 'avatarAudio'
    | 'durationSilence'
    | 'isAudio'
    | 'language'
    | 'pitch'
    | 'projectId'
    | 'projectName'
    | 'sex'
    | 'speed'
    | 'text'
  > {}

export interface IProjectSentence
  extends Pick<IProject, 'audio' | 'projectId' | 'text'> {
  sentence: ISentence[];
}

export interface ISentence {
  sentence: string;
  sentenceAudio: string;
}

export interface ICreateAudioSentenceData
  extends Pick<IProject, 'projectId' | 'text'> {
  audioUrl: string;
}

export interface ICreateAudioTextData extends ICreateAudioSentenceData {}

export interface IGoToAvatarRequest extends ICreateAudioSentenceData {}
