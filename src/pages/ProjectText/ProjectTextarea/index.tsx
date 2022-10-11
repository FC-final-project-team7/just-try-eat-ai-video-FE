import styled, { css } from '~/utils/styled-components-fast';
import { textInputStyle } from '~/styles/mixins';
import { mixin } from '../mixin';

const ProjectTextarea = styled.textarea`
  ${({ theme }) => css`
    ${mixin.base}
    ${textInputStyle({
      borderWidth: '2px',
      placeholderColor: theme.textColors.dark,
    })}
    
    resize: none;

    padding: 32px;

    font-size: ${theme.fontSize.medium};
  `}
`;

export default ProjectTextarea;
