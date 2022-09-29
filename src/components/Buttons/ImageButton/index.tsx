import * as React from 'react';
import { SvgrElement } from '*.svg';

import BaseButton, { BaseButtonProps } from '~/components/Buttons/BaseButton';

type Props = {
  children: React.ReactHTMLElement<HTMLImageElement> | SvgrElement;
} & Omit<BaseButtonProps, 'children' | 'width' | 'height'>;

const ImageButton = (props: Props) => {
  return <BaseButton {...props} width="fit-content" height="unset" />;
};

export default ImageButton;
