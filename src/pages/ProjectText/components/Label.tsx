import styled, { css } from 'styled-components';

const Label = styled.label`
  ${({ theme }) =>
    css`
      font-size: ${theme.fontSize.medium};
      font-weight: ${theme.fontWeight.regular};
      text-align: center;
    ` as TemplateStringsArray}
`;

export default Label;
