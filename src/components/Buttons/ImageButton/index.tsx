import * as React from 'react';
import styled, { css } from 'styled-components';
import { SvgrElement } from '*.svg';

import BaseButton, { BaseButtonProps } from '~/components/Buttons/BaseButton';

type Props = {
  children: React.ReactHTMLElement<HTMLImageElement> | SvgrElement;
} & Omit<BaseButtonProps, 'children'>;

const FitButton = styled(BaseButton)`
  ${() => css`
    width: fit-content;
  `}
`;

const ImageButton = (props: Props) => {
  return <FitButton {...props} />;
};

export default ImageButton;
