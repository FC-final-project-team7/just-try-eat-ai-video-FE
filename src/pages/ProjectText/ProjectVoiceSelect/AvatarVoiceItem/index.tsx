import { useCallback } from 'react';

import IconButton from '../../components/IconButton';
import * as S from './styles';
import { StyledSVG } from '../../styles';

import { ReactComponent as PlaySVG } from '~/assets/icons/play.svg';
import { ReactComponent as StopSVG } from '~/assets/icons/stop.svg';

import { TVoice } from '../constants';

interface Props {
  className?: string;
  name: string;
  defaultChecked: boolean;
  onChange: (e: { name: string; value: string }) => void;
  voice: TVoice;
  onPlay: (voice: TVoice) => void;
  onStop: (voice: TVoice) => void;
}

const AvatarVoiceItem = (props: Props) => {
  const { className, name, defaultChecked, onChange, voice, onPlay, onStop } =
    props;

  const onChangeHandler = useCallback(() => {
    onChange({ name, value: voice.key });
  }, []);

  const onPlayHandler = useCallback(() => {
    onPlay(voice);
  }, []);

  const onStopHandler = useCallback(() => {
    onStop(voice);
  }, []);

  return (
    <S.Label className={className}>
      <S.RadioButton
        name={name}
        value={voice.key}
        defaultChecked={defaultChecked}
        onChange={onChangeHandler}
      />
      <S.Contents>
        {voice.key}
        <S.ControlContainer>
          <IconButton onClick={onPlayHandler}>
            <StyledSVG $svgr={PlaySVG} />
          </IconButton>
          <IconButton onClick={onStopHandler}>
            <StyledSVG $svgr={StopSVG} />
          </IconButton>
        </S.ControlContainer>
      </S.Contents>
    </S.Label>
  );
};

export default AvatarVoiceItem;
