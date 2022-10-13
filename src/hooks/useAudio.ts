import { useCallback, useEffect } from 'react';

const audio = new Audio();

// callback wrapping 할 시간이....
export const useAudio = () => {
  const play = useCallback((src: string) => {
    if (audio.src !== src) {
      audio.pause();
      audio.src = src;
      audio.load();
    }

    audio.play();
  }, []);

  const stop = useCallback(() => {
    audio.pause();
  }, []);

  useEffect(() => {
    return () => {
      stop();
      audio.src = '';
    };
  }, []);

  return { play, stop, audio };
};
