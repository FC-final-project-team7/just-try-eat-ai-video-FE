import { memo } from 'react';
import styled from 'styled-components';

import { SvgrComponentType } from '~/types/svgr';

export type Props = { $svgr: SvgrComponentType };

export const withApplyStyledSVG = (cssValue: TemplateStringsArray) =>
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  memo(styled.svg.attrs<Props & { as: any }>(({ $svgr }) => ({
    as: $svgr,
  }))<Props>`
    ${cssValue}
  `);
