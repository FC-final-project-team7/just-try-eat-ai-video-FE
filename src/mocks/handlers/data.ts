import { IProject } from '~/types/project/projects';
import { IProjectSentence } from '~/types/project/sentence';

export const projectText: { [id: number]: IProject } = {};
export const getDefaultProjectText = (id: string): IProject => {
  return {
    projectId: Number(id),
    projectName: `project${id}`,
    avatarAudio: 'kor_w_1.wav',
    sex: 'MALE',
    language: 'korean',
    durationSilence: 1,
    pitch: 1,
    speed: 1,
    text: '안녕하세요 장호준입니다.',
    audio: '23j4kl2j.wav',
    isAudio: false,
    avatar: 'url',
    category1: 'url',
    category2: 'url',
    category3: 'url',
    background: 'url',
    modifiedDate: '2022-10-11T14:35:40.585Z',
    thumbnail: 'url',
  };
};
export const getProjectText = (id: string) => {
  const v = projectText[Number(id)];
  return v ?? getDefaultProjectText(id);
};

export const projectSentence: { [id: number]: IProjectSentence } = {};
export const getDefaultProjectSentence = (
  projectText: IProject
): IProjectSentence => {
  return {
    projectId: projectText.projectId,
    audio: 'http://23j4kl2j.wav',
    text: projectText.text,
    sentenceList: projectText.text
      .split('.')
      .map((s) => s.trim())
      .map((s) => ({
        sentence: s,
        sentenceAudio: 'http://5432urie.wav',
      })),
  };
};

export const updateProjectSentence = (projectText: IProject) => {
  const v = (projectSentence[projectText.projectId] =
    getDefaultProjectSentence(projectText));
  return v;
};
