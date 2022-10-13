import { css } from '~/utils/styled-components-fast';
import { withApplyStyledSVG } from '~/utils/WithApplyStyledSVG';

const StyledSVG = withApplyStyledSVG(css`
  ${() => css`
    color: inherit;
  `}
`);

export default StyledSVG;
