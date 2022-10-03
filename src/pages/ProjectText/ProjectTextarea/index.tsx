import styled, { css } from 'styled-components';
import { fontFamily } from '~/styles/mixins';
import { mixin } from '../mixin';

const ProjectTextarea = styled.textarea.attrs(() => ({
  placeholder: '텍스트를 입력하세요.',
}))`
  ${({ theme }) => css`
    ${mixin.base}
    ${mixin.size.contents.textarea}
    padding: 32px;
    border: transparent 2px solid;
    resize: none;
    outline: none;

    font-size: ${theme.fontSize.medium};

    &::placeholder {
      ${fontFamily};
      color: ${theme.textColors.dark};
    }

    &:focus-visible {
      border: ${theme.colors.main.purple} 2px solid;
    }
  `}
`;

export default ProjectTextarea;
