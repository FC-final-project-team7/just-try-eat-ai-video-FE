import { TProjectSentence, TProject } from '~/types/project/projects';

export const projectText: { [id: number]: TProject } = {};
export const getDefaultProjectText = (id: string): TProject => {
  return {
    projectId: Number(id),
    projectName: `project${id}`,
    avatarAudio: 'kor_w_1',
    sex: '남자',
    language: '한국어',
    durationSilence: 1,
    pitch: 1,
    speed: 1,
    text: '안녕하세요 장호준입니다.',
    audioName: '23j4kl2j.wav',
    isaudio: false,
    avatar: 'url',
    category1: 'url',
    category2: 'url',
    category3: 'url',
    background: 'url',
  };
};
export const getProjectText = (id: string) => {
  const v = projectText[Number(id)];
  return v ?? getDefaultProjectText(id);
};

export const projectSentence: { [id: number]: TProjectSentence } = {};
export const getDefaultProjectSentence = (
  projectText: TProject
): TProjectSentence => {
  return {
    projectId: projectText.projectId,
    audio: 'http://23j4kl2j.wav',
    text: projectText.text,
    sentence: projectText.text
      .split('.')
      .map((s) => s.trim())
      .map((s) => ({
        sentence: s,
        sentenceAudio: 'http://5432urie.wav',
      })),
  };
};
export const updateProjectSentence = (projectText: TProject) => {
  const v = (projectSentence[projectText.projectId] =
    getDefaultProjectSentence(projectText));
  return v;
};
