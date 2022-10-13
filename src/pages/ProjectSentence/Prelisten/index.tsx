import { useCallback, useState } from 'react';

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
  src?: string;
}

const defaultProps = makeDefaultProps<Props>()({
  src: '',
});

const Prelisten = (props: Props) => {
  const { src } = { ...defaultProps, ...props };
  const { t, tu } = useTranslate();

  const [disabled, setDisabled] = useState<boolean>(!!src);

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

  return (
    <S.Container>
      <S.Seekbar
        name="seekbar"
        step={1}
        value={second}
        onChange={onChangeSeekbarHandler}
        dataList={seekbarDataList}
        disabled={disabled}
        getTranslateUnsafe={tu}
      />
      <S.Buttons>
        <S.ControlContainer>
          <S.IconButton onClick={onPlayHandler} disabled={disabled}>
            <StyledSVG $svgr={PlaySVG} />
          </S.IconButton>
          <S.IconButton onClick={onStopHandler} disabled={disabled}>
            <StyledSVG $svgr={StopSVG} />
          </S.IconButton>
        </S.ControlContainer>
        <S.DownloadButton>{t('prelisten.download')}</S.DownloadButton>
      </S.Buttons>
    </S.Container>
  );
};

export default Prelisten;
