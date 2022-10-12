import { Fragment, useCallback, useRef } from 'react';

import SentenceInterval from './SentenceInterval';
import Label from '../components/Label';
// import IconButton from '../components/IconButton';
import * as S from './styles';

import { useTranslate } from '../translate/hooks';

// import { ReactComponent as PlaySVG } from '~/assets/icons/play.svg';
// import { ReactComponent as StopSVG } from '~/assets/icons/stop.svg';

import { kSentenceOption, kSliderList } from './constants';

import { IVoiceOption } from '~/types/project/voices';

interface Props {
  className?: string;
  defaultVoiceOptions: IVoiceOption;
  onChange: (voiceOption: IVoiceOption) => void;
}

const ProjectVoiceOptions = (props: Props) => {
  const { className, defaultVoiceOptions, onChange } = props;
  const { t } = useTranslate();

  const voiceOptions = useRef<IVoiceOption>(defaultVoiceOptions);
  const onChangeOptionsHandler = useCallback(
    ({ name, value }: { name: string; value: number }) => {
      voiceOptions.current = {
        ...defaultVoiceOptions,
        [name]: value,
      };

      onChange(voiceOptions.current);
    },
    [defaultVoiceOptions, onChange]
  );

  return (
    <S.Container className={className}>
      {kSliderList.map((slider) => (
        <Fragment key={slider.key}>
          <Label htmlFor={slider.key}>{t(slider.labelKey)}</Label>
          <S.Slider
            name={slider.key}
            onChange={onChangeOptionsHandler}
            {...slider.props}
          />
        </Fragment>
      ))}
      <>
        <Label>{t(kSentenceOption.labelKey)}</Label>
        <SentenceInterval
          name={kSentenceOption.key}
          onChange={onChangeOptionsHandler}
          {...kSentenceOption.props}
        />
      </>
      {/*<>*/}
      {/*  <Label>{t('voiceOption.prelisten')}</Label>*/}
      {/*  <S.Prelisten>*/}
      {/*    <IconButton>*/}
      {/*      <S.StyledSVG $svgr={PlaySVG} />*/}
      {/*    </IconButton>*/}
      {/*    <IconButton>*/}
      {/*      <S.StyledSVG $svgr={StopSVG} />*/}
      {/*    </IconButton>*/}
      {/*  </S.Prelisten>*/}
      {/*</>*/}
    </S.Container>
  );
};

export default ProjectVoiceOptions;
