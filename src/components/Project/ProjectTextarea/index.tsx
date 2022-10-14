import styled, { css } from 'styled-components';
import { projectPages, textInputStyle } from '~/styles/mixins';

const ProjectTextarea = styled.textarea`
  ${({ theme }) =>
    css`
      ${projectPages.container.base}
      ${textInputStyle({
        borderWidth: '2px',
        placeholderColor: theme.textColors.dark,
      })}
    
    resize: none;

      padding: 32px;

      font-size: ${theme.fontSize.medium};
    ` as TemplateStringsArray}
`;

export default ProjectTextarea;
