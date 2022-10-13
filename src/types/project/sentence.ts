export interface ISentenceRequest {
  audio: string;
  avatarAudio: string;
  durationSilence: number;
  isAudio: true;
  language: string;
  pitch: number;
  projectId: number;
  projectName: string;
  sex: string;
  speed: number;
  text: string;
}

export interface IProjectSentence {
  projectId: number;
  text: string;
  audio: string;
  sentence: ISentence[];
}

export interface ISentence {
  sentence: string;
  sentenceAudio: string;
}

export interface ICreateAudioSentenceData {
  audioUrl: string;
  projectId: number;
  text: string;
}

export interface ICreateAudioTextData extends ICreateAudioSentenceData {}
