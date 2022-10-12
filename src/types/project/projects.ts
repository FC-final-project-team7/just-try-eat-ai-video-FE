import { IVoiceSelect, IVoiceOption } from '~/types/project/voices';

export type TProjectData = {
  projectId: number;
  projectName: string;
  modifiedDate: string;
  thumbnail: string;
};

export type TVideoData = {
  videoId: number;
  name: string;
  generated: boolean;
  createdDate: string;
  thumbnail: string;
};

export interface IProject extends TProjectData, IVoiceOption, IVoiceSelect {
  avatar: string;
  text: string;
  audioName: string;
  isaudio: boolean;
  category1: string;
  category2: string;
  category3: string;
  background: string;
}

export interface ISentence {
  sentence: string;
  sentenceAudio: string;
}

export interface IProjectSentence {
  projectId: number;
  text: string;
  audio: string;
  sentence: ISentence[];
}
