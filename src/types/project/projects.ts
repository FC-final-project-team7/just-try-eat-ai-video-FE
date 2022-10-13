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

export interface IProject
  extends TProjectData,
    IVoiceOption,
    IVoiceSelect,
    IProjectAvatar {
  audio: string;
  isAudio: boolean;
  text: string;
}

export interface IProjectTextSaveRequest
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

export interface IProjectAvatar {
  avatar: string;
  background: string;
  category1: string;
  category2: string;
  category3: string;
  projectId: number;
}
