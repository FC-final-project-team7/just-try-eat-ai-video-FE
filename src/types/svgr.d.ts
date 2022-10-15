/// <reference types="vite-plugin-svgr/client" />
import { ElementType, ReactElement } from 'react';
import { ReactComponent } from '*.svg';

type ReactComponentProps = Parameters<typeof ReactComponent>[0];
export type SvgrElementType = ReactElement<ReactComponentProps>;
export type SvgrComponentType = ElementType<ReactComponentProps>;
