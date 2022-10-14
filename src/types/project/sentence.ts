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

export const toISentenceRequest = (o: ISentenceRequest) => ({
  audio: o.audio,
  avatarAudio: o.avatarAudio,
  durationSilence: o.durationSilence,
  isAudio: o.isAudio,
  language: o.language,
  pitch: o.pitch,
  projectId: o.projectId,
  projectName: o.projectName,
  sex: o.sex,
  speed: o.speed,
  text: o.text,
});

export interface IProjectSentence
  extends Pick<IProject, 'audio' | 'projectId' | 'text'> {
  sentenceList: ISentence[];
}

export const fromIProjectSentence = (
  o: IProjectSentence
): IProjectSentence => ({
  audio: o.audio,
  projectId: o.projectId,
  text: o.text,
  sentenceList: o.sentenceList,
});

export interface ISentence {
  sentence: string;
  sentenceAudio: string;
}

export interface ICreateAudioSentenceData
  extends Pick<IProject, 'projectId' | 'text'> {
  audioUrl: string;
}

export const toICreateAudioSentenceData = (
  o: ICreateAudioSentenceData
): ICreateAudioSentenceData => ({
  projectId: o.projectId,
  audioUrl: o.audioUrl,
  text: o.text,
});

export const fromICreateAudioSentenceData = (
  o: ICreateAudioSentenceData
): ICreateAudioSentenceData => ({
  projectId: o.projectId,
  audioUrl: o.audioUrl,
  text: o.text,
});

export interface ICreateAudioTextData extends ICreateAudioSentenceData {}

export const toICreateAudioTextData = toICreateAudioSentenceData;
export const fromICreateAudioTextData = fromICreateAudioSentenceData;

export interface IGoToAvatarRequest extends ICreateAudioSentenceData {}

export const toIGoToAvatarRequest = toICreateAudioSentenceData;
export const fromIGoToAvatarRequest = fromICreateAudioSentenceData;
