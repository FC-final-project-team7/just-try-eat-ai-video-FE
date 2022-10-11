import { ReactHTMLElement } from 'react';

import BaseButton, { BaseButtonProps } from '../BaseButton';

import { SvgrElementType } from '~/types/types';

type Props = {
  children: ReactHTMLElement<HTMLImageElement> | SvgrElementType;
} & Omit<BaseButtonProps, 'children' | 'width' | 'height'>;

const ImageButton = (props: Props) => {
  return <BaseButton {...props} width="fit-content" height="unset" />;
};

export default ImageButton;
