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

export const pickIProjectTextSaveRequest = (o: IProjectTextSaveRequest) => ({
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

export interface IProjectAvatar {
  avatar: string;
  background: string;
  category1: string;
  category2: string;
  category3: string;
  projectId: number;
}
