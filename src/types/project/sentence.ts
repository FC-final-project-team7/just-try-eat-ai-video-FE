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

export const pickISentenceRequest = (o: ISentenceRequest) => ({
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

export interface ISentence {
  sentence: string;
  sentenceAudio: string;
}

export interface ICreateAudioSentenceData
  extends Pick<IProject, 'projectId' | 'text'> {
  audioUrl: string;
}

export const pickICreateAudioSentenceData = (o: ICreateAudioSentenceData) => ({
  projectId: o.projectId,
  audioUrl: o.audioUrl,
  text: o.text,
});

export interface ICreateAudioTextData extends ICreateAudioSentenceData {}

export const pickICreateAudioTextData = pickICreateAudioSentenceData;

export interface IGoToAvatarRequest extends ICreateAudioSentenceData {}

export const pickIGoToAvatarRequest = pickICreateAudioSentenceData;
