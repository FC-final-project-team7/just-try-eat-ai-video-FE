import styled, { css } from 'styled-components';

import SliderBase from '~/components/Project/Slider';
import { projectPages } from '~/styles/mixins';

export const Container = styled.div`
  ${() =>
    css`
      ${projectPages.container.base};
      ${projectPages.container.bg};

      display: grid;
      grid-template-rows: repeat(1fr);
      /* prettier-ignore */
      grid-template-columns: minmax(max-content, 1fr) 168px minmax(max-content, 1fr) 76px;
      column-gap: 10px;
      align-items: center;

      padding: 32px 56px 32px 0;
    ` as TemplateStringsArray}
`;

export const Slider = styled(SliderBase)`
  grid-column: 2 / -1;
`;

// export const Prelisten = styled.div`
//   box-sizing: border-box;
//
//   display: flex;
//   flex-direction: row;
//   justify-content: space-between;
//   align-items: center;
// `;
