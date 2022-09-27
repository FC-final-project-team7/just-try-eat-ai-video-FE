import styled from 'styled-components';

export type BaseButtonProps = Omit<JSX.IntrinsicElements['button'], 'ref'>;

const BaseButton = styled.button<BaseButtonProps>`
  all: unset;

  font: inherit;
  text-align: center;
  cursor: pointer;
  outline: inherit;
`;

export default BaseButton;
