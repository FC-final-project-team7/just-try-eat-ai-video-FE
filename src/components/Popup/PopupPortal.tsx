import { ReactNode } from 'react';
import ReactDom from 'react-dom';

type Props = {
  children: ReactNode;
};

const PopupPortal = ({ children }: Props) => {
  const el = document.getElementById('popup') as HTMLElement;

  return ReactDom.createPortal(children, el);
};

export default PopupPortal;
