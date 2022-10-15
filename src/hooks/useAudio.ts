import { useCallback, useEffect, useMemo } from 'react';

// 나중에 WeakMap 으로?
const audioMap = new Map();
const _get = (key: string) => {
  if (!audioMap.has(key)) {
    audioMap.set(key, new Audio());
  }
  return audioMap.get(key) as HTMLAudioElement;
};

// callback wrapping 할 시간이....
export const useAudio: (key?: string) => {
  play: (src: string) => void;
  stop: (src?: string) => void;
  audio: HTMLAudioElement;
} = (key = '_________') => {
  const audio = useMemo(() => _get(key), []);

  const play = useCallback((src: string) => {
    audioMap.forEach((v: HTMLAudioElement) => {
      if (audio === v) return;
      v.pause();
    });

    if (audio.src !== src) {
      audio.pause();
      audio.src = src;
      audio.load();
    }
    audio.play();
  }, []);

  const stop = useCallback((src?: string) => {
    if (!src || audio.currentSrc !== src) return;

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
