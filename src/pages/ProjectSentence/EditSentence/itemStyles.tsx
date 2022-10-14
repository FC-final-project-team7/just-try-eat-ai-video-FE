import styled, { css } from 'styled-components';
import { focusThisOutline } from '~/styles/mixins';
import FilledButton from '~/components/Buttons/FilledButton';
import { withApplyStyledSVG } from '~/utils/WithApplyStyledSVG';

export const SentenceList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 36px;
`;

export const SentenceListItem = styled.div`
  display: flex;
  justify-content: stretch;
  align-items: center;
  flex-wrap: nowrap;
  gap: 14px;

  padding: 0 26px 0 14px;
`;

export const NumberLabel = styled.div`
  ${({ theme }) =>
    css`
      flex-grow: 0;
      flex-shrink: 0;

      display: flex;
      justify-content: center;
      align-items: baseline;

      width: 20px;
      height: 20px;
      margin-right: 2px;

      border-radius: 1em;

      font-size: 12px;
      font-weight: ${theme.fontWeight.medium};
      color: ${theme.textColors.dark};

      background-color: ${theme.colors.gray100};
    ` as TemplateStringsArray}
`;

export const SentenceInput = styled.input`
  ${({ theme }) =>
    css`
      ${focusThisOutline()};

      flex-grow: 1;
      flex-shrink: 0;

      padding: 10px 28px;

      border: none;
      border-radius: 1em;

      font-size: ${theme.fontSize.medium};
      font-weight: ${theme.fontWeight.medium};
      color: ${theme.textColors.dark};

      background-color: ${theme.colors.gray100};
    ` as TemplateStringsArray}
`;

export const IconButton = styled(FilledButton).attrs(() => ({
  width: '32px',
  height: '32px',
}))`
  ${({ theme, ...props }) =>
    css`
      ${({ theme }) => theme.flex.flexCenter};
      ${focusThisOutline()};

      min-width: ${props.width};
      min-height: ${props.height};

      border-radius: 100%;

      background-color: ${theme.colors.gray200};
      color: ${theme.bg.main};
    ` as TemplateStringsArray}
`;

export const StyledSVG = withApplyStyledSVG(
  css`
    ${() =>
      css`
        color: inherit;
      ` as TemplateStringsArray}
  ` as TemplateStringsArray
);

export const CreateButton = styled(FilledButton).attrs(() => ({
  width: '64px',
  height: 'small',
}))`
  ${({ theme }) =>
    css`
      background-color: ${theme.colors.gray200};
      color: ${theme.bg.main};
    ` as TemplateStringsArray}
`;
