import { useCallback, useEffect, useRef } from 'react';

export const useAudio = () => {
  const audio = useRef<HTMLAudioElement | null>(null);
  const play = useCallback((src: string) => {
    audio.current?.pause();
    audio.current = new Audio(src);
    audio.current?.play();
  }, []);

  const stop = useCallback(() => {
    audio.current?.pause();
    audio.current = null;
  }, []);

  useEffect(() => {
    return () => {
      stop();
    };
  }, []);

  return { play, stop };
};
