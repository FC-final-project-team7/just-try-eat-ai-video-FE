import styled, { css } from '~/utils/styled-components-fast';

const Label = styled.label`
  ${({ theme }) => css`
    font-size: ${theme.fontSize.medium};
    font-weight: ${theme.fontWeight.regular};
    text-align: center;
  `}
`;

export default Label;
