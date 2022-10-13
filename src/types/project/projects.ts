import { IVoiceOption, IVoiceSelect } from '~/types/project/voices';

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
  audio: string;
  avatar: string;
  background: string;
  category1: string;
  category2: string;
  category3: string;
  isAudio: true;
  text: string;
}

export interface IProjectTextSaveRequest {
  audio: string;
  avatarAudio: string;
  durationSilence: number;
  language: string;
  pitch: number;
  projectId: number;
  projectName: string;
  sex: string;
  speed: number;
  text: string;
}
