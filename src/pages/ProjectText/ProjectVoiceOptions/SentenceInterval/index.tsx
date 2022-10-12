import { ChangeEvent, MouseEvent, useCallback, useState } from 'react';

import Label from '../../components/Label';
import IconButton from '../../components/IconButton';
import { StyledSVG } from '../../components/StyledSVG';
import * as S from './styles';

import { useTranslate } from '../../translate/hooks';
import { makeDefaultProps } from '~/utils/makeDefaultProps';

import { ReactComponent as PlugSVG } from '~/assets/icons/plus-bold.svg';
import { ReactComponent as MinusSVG } from '~/assets/icons/minus-bold.svg';

import { COMMANDS, getValueApplyCmd } from './commands';

interface Props {
  name: string;
  className?: string;
  min?: number;
  max?: number;
  step?: number;
  defaultValue?: number;
  onChange?: (e: { name: string; value: number }) => void;
}

const defaultProps = makeDefaultProps<Props>()({
  min: 0.1,
  max: 1.0,
  step: 0.1,
  defaultValue: 0.5,
});

const SentenceInterval = (props: Props) => {
  const { className, onChange, defaultValue, name, ...inputProps } = {
    ...defaultProps,
    ...props,
  };
  const { t } = useTranslate();

  const [value, setValue] = useState<number>(defaultValue);
  const setValueApplyCmd = useCallback(
    (cmd: COMMANDS, value?: number) => {
      setValue((p) => {
        const v = cmd === 'set' ? value : p;
        if (v === undefined) return p;

        const n = getValueApplyCmd(cmd, v, inputProps);
        const changed = p !== n;
        if (changed) onChange?.({ name, value: n });
        return changed ? n : p;
      });
    },
    [setValue, onChange]
  );

  const onClickCmdButtonHandler = useCallback(
    (e: MouseEvent<HTMLButtonElement>) => {
      setValueApplyCmd(e.currentTarget.name as COMMANDS);
    },
    [setValueApplyCmd]
  );

  const onChangeHandle = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      const v = e.currentTarget.valueAsNumber;
      if (Number.isNaN(v)) return;
      setValueApplyCmd('set', v);
    },
    [setValueApplyCmd]
  );

  return (
    <S.Container className={className}>
      <IconButton name={COMMANDS.down} onClick={onClickCmdButtonHandler}>
        <StyledSVG $svgr={MinusSVG} />
      </IconButton>
      <S.ContainerInputNumber>
        <S.InputNumber
          {...inputProps}
          id={name}
          value={value}
          onChange={onChangeHandle}
        />
        <Label htmlFor={name}>{t('voiceOption.second')}</Label>
      </S.ContainerInputNumber>
      <IconButton name={COMMANDS.up} onClick={onClickCmdButtonHandler}>
        <StyledSVG $svgr={PlugSVG} />
      </IconButton>
    </S.Container>
  );
};

export default SentenceInterval;
