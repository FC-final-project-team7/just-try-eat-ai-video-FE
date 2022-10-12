import { css } from '~/utils/styled-components-fast';
import { withApplyStyledSVG } from '~/utils/WithApplyStyledSVG';

const StyledSVG = withApplyStyledSVG(css`
  ${({ theme }) => css`
    color: ${theme.bg.main};
  `}
`);

export default StyledSVG;
