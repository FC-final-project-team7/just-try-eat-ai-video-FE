export const KO = {
  prelisten: {
    seekbar: (t: number) =>
      Number.isNaN(t)
        ? '--:--'
        : `${(t / 60).toFixed().padStart(2, '0')}:${(t % 60)
            .toFixed()
            .padStart(2, '0')}`,
    download: '음성 다운로드',
    create: '음성 생성',
    creating: '음성 생성 중',
  },
  sentenceList: {
    allApply: '수정 내용 전체 적용',
    create: '생성',
  },
};
