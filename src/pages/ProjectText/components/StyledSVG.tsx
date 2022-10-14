import { css } from 'styled-components';
import { withApplyStyledSVG } from '~/utils/WithApplyStyledSVG';

const StyledSVG = withApplyStyledSVG(
  css`
    ${() =>
      css`
        color: inherit;
      ` as TemplateStringsArray}
  ` as TemplateStringsArray
);

export default StyledSVG;
