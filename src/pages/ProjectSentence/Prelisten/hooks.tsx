import {
  Dispatch,
  SetStateAction,
  useCallback,
  useEffect,
  useRef,
} from 'react';
import { useAudio } from '~/hooks/useAudio';
import { tk } from '~/pages/ProjectSentence/translate/hooks';

export const makeSeekbarDataList = (
  duration: number
): { value: number; labelKey: object }[] => {
  const valid = !Number.isNaN(duration);

  return [
    {
      value: 0,
      labelKey: tk({
        k: 'prelisten.seekbar',
        v: valid ? 0 : Number.NaN,
      }) as object,
    },
    {
      value: valid ? Number(duration.toFixed()) : 1,
      labelKey: tk({
        k: 'prelisten.seekbar',
        v: valid ? Number(duration.toFixed()) : Number.NaN,
      }) as object,
    },
  ];
};

export function useAudioAllPrelisten(
  src: string,
  setDisabled: Dispatch<SetStateAction<boolean>>,
  setSecond: Dispatch<SetStateAction<number>>,
  setSeekbarDataList: Dispatch<
    SetStateAction<{ value: number; labelKey: object }[]>
  >
): {
  play: () => void;
  audio: HTMLAudioElement;
  srcRef: React.MutableRefObject<string>;
  pause: () => void;
} {
  const srcRef = useRef(src);

  const { audio, play: playBase } = useAudio('all-prelisten');
  useEffect(() => {
    function onLoadded(this: HTMLAudioElement) {
      if (this.src !== srcRef.current) return;

      setSecond(0);
      setDisabled(false);
      setSeekbarDataList(() => {
        return makeSeekbarDataList(this.duration);
      });
    }

    function onError(this: HTMLAudioElement) {
      if (this.src !== srcRef.current) return;

      setSecond(0);
      setDisabled(true);
      setSeekbarDataList(() => {
        return makeSeekbarDataList(Number.NaN);
      });
    }

    function onTimeUpdate(this: HTMLAudioElement) {
      if (this.src !== srcRef.current) return;

      setSecond(this.currentTime);
    }

    audio.addEventListener('loadeddata', onLoadded);
    audio.addEventListener('loadstart', onError);
    audio.addEventListener('error', onError);
    audio.addEventListener('timeupdate', onTimeUpdate);

    return () => {
      audio.removeEventListener('loadeddata', onLoadded);
      audio.removeEventListener('loadstart', onError);
      audio.removeEventListener('error', onError);
      audio.removeEventListener('timeupdate', onTimeUpdate);
    };
  }, [audio]);

  useEffect(() => {
    if (audio.src === src) return;

    audio.pause();
    audio.src = src;
    audio.load();

    srcRef.current = src;
  }, [src]);

  const play = useCallback(() => {
    playBase(srcRef.current);
  }, []);

  const pause = useCallback(() => {
    audio.pause();
  }, [audio]);

  return { srcRef, audio, play, pause };
}
