import { TVoiceSelect, TVoiceOption } from '~/types/project/voices';

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

export type TProject = {
  projectId: number;
  projectName: string;
  avatar: string;
  text: string;
  audioName: string;
  isaudio: boolean;
  category1: string;
  category2: string;
  category3: string;
  background: string;
} & TVoiceOption &
  TVoiceSelect;

export type TSentence = {
  sentence: string;
  sentenceAudio: string;
};

export type TProjectSentence = {
  projectId: number;
  text: string;
  audio: string;
  sentence: TSentence[];
};
