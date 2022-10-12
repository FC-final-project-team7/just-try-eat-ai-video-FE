import { withApplyStyledSVG } from '~/utils/WithApplyStyledSVG';
import { css } from '~/utils/styled-components-fast';

export const StyledSVG = withApplyStyledSVG(css`
  ${({ theme }) => css`
    color: ${theme.bg.main};
  `}
`);
