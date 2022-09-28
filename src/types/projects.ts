export type TProjectText = {
  projectId: number;
  projectName: string;
  avatarAudio: string;
  sex: '남자' | '여자';
  language: '한국어' | '영어' | '중국어';
  durationSilence: number;
  pitch: number;
  speed: number;
  text: string;
  audioName: string;
  isaudio: boolean;
  avatar: string;
  category1: string;
  category2: string;
  category3: string;
  background: string;
};

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
