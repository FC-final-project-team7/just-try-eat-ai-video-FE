import { useCallback, useEffect, useState } from 'react';

import * as S from './styles';

import { useTranslate } from '../translate/hooks';
import StyledSVG from '~/pages/ProjectText/components/StyledSVG';

import { ReactComponent as PlaySVG } from '~/assets/icons/play.svg';
import { ReactComponent as StopSVG } from '~/assets/icons/stop.svg';
import { makeDefaultProps } from '~/utils/makeDefaultProps';
import {
  makeSeekbarDataList,
  useAudioAllPrelisten,
} from '~/pages/ProjectSentence/Prelisten/hooks';

interface Props {
  className?: string;
  src?: string;
  isCreating: boolean;
  onClickCreate: () => void;
}

const defaultProps = makeDefaultProps<Props>()({
  src: '',
});

const Prelisten = (props: Props) => {
  const { className, src, isCreating, onClickCreate } = {
    ...defaultProps,
    ...props,
  };
  const { t, tu } = useTranslate();

  const [disabled, setDisabled] = useState<boolean>(!src);
  useEffect(() => {
    setDisabled(!src);
  }, [src]);

  const [second, setSecond] = useState<number>(0);
  const [seekbarDataList, setSeekbarDataList] = useState(() =>
    makeSeekbarDataList(Number.NaN)
  );

  const { audio, play, pause } = useAudioAllPrelisten(
    src,
    setDisabled,
    setSecond,
    setSeekbarDataList
  );

  const onPlayHandler = useCallback(() => {
    play();
  }, []);

  const onStopHandler = useCallback(() => {
    pause();
  }, []);

  const onChangeSeekbarHandler = useCallback(
    ({ value }: { value: number }) => {
      setSecond(value);
      audio.currentTime = value;
    },
    [setSecond, audio]
  );

  const onClickDownload = useCallback(() => {
    disabled
      ? onClickCreate()
      : (() => {
          // 편법....
          const a = document.createElement('a');
          a.download = src;
          a.href = src;
          a.click();
        })();
  }, [disabled, src]);

  return (
    <S.Container className={className}>
      <S.Seekbar
        name="seekbar"
        step={1}
        value={second}
        onChange={onChangeSeekbarHandler}
        dataList={seekbarDataList}
        disabled={isCreating || disabled}
        getTranslateUnsafe={tu}
      />
      <S.Buttons>
        <S.ControlContainer>
          <S.IconButton
            onClick={onPlayHandler}
            disabled={isCreating || disabled}
          >
            <StyledSVG $svgr={PlaySVG} />
          </S.IconButton>
          <S.IconButton
            onClick={onStopHandler}
            disabled={isCreating || disabled}
          >
            <StyledSVG $svgr={StopSVG} />
          </S.IconButton>
        </S.ControlContainer>
        <S.DownloadButton onClick={onClickDownload} disabled={isCreating}>
          {isCreating
            ? t('prelisten.creating')
            : disabled
            ? t('prelisten.create')
            : t('prelisten.download')}
        </S.DownloadButton>
      </S.Buttons>
    </S.Container>
  );
};

export default Prelisten;
