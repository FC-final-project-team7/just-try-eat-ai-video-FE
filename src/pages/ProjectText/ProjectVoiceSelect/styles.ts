import styled, { css } from 'styled-components';

import LabelBase from '../components/Label';
import AvatarVoiceItemBase from './AvatarVoiceItem';

import { projectPages } from '~/styles/mixins';

export const Container = styled.div`
  ${() =>
    css`
      ${projectPages.container.base};
      ${projectPages.container.bg};

      display: flex;
      flex-direction: column;
      gap: 32px;

      padding: 32px 24px 24px;

      > * {
        height: 48px;
      }
    ` as TemplateStringsArray}
`;

export const Label = styled(LabelBase)`
  flex-grow: 0;

  padding-left: 36px;
  padding-right: 40px;
`;

export const SexGroup = styled.div.attrs(() => ({
  role: 'radiogroup',
}))`
  padding: 0;
  margin: 0;

  display: flex;
  flex-flow: row;
  align-items: center;

  list-style: none;

  &:focus {
    outline: none;
  }
`;

export const LangGroup = styled.div`
  display: flex;
  flex-flow: row;
  align-items: center;
`;

export const VoiceGroup = styled.div.attrs(() => ({
  role: 'radiogroup',
}))`
  ${({ theme }) =>
    css`
      flex-grow: 1;

      display: flex;
      flex-flow: column;
      align-items: start;
      gap: 34px;

      padding: 38px 36px 0;

      border: 2px solid ${theme.colors.gray400};
      border-radius: 10px;
    ` as TemplateStringsArray}
`;

export const VoiceGroupLabel = styled(LabelBase)`
  justify-self: center;
`;

// TODO 스크롤 스타일링
export const VoiceGroupListContainer = styled.div.attrs(() => ({}))`
  flex-grow: 1;
  align-self: stretch;

  display: flex;
  flex-flow: column;
  align-items: center;
  gap: 16px;

  padding: 4px 8px;

  overflow-x: hidden;
  overflow-y: scroll;
`;

export const AvatarVoiceItem = styled(AvatarVoiceItemBase)`
  flex-grow: 0;
  flex-shrink: 0;
`;
