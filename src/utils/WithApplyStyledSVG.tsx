import { memo } from 'react';
import styled, { css } from 'styled-components';

import { SvgrComponentType } from '~/types/types';

export type Props = { $svgr: SvgrComponentType };

export const withApplyStyledSVG = (cssValue: ReturnType<typeof css>) =>
  memo(styled.svg.attrs<Props>(({ $svgr }) => ({
    as: $svgr,
  }))<Props>`
    ${cssValue}
  `);
