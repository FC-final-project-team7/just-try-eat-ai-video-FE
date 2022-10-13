export const KO = {
  prelisten: {
    seekbar: (t: number) =>
      Number.isNaN(t)
        ? '--:--'
        : `${(t / 60).toFixed().padStart(2, '0')}:${(t % 60)
            .toFixed()
            .padStart(2, '0')}`,
    download: '음성 다운로드',
  },
} as const;
