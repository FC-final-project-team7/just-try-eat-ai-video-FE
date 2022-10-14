import styled from 'styled-components';
import FilledButton from '~/components/Buttons/FilledButton';

export const ModalBackground = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 20;
`;
export const ModalContainer = styled.div`
  ${(props) => props.theme.flex.flexColumn}
  width: 540px;
  height: 360px;
  border-radius: 20px;
  background-color: ${(props) => props.theme.bg.modal};
  backdrop-filter: blur(15px);
  padding: 120px 98px 60px;
  gap: 72px;
`;
export const ModalContent = styled.div`
  width: 100%;
  height: 60px;
  font-size: ${(props) => props.theme.fontSize.large};
  font-weight: ${(props) => props.theme.fontWeight.regular};
  text-align: center;
`;

export const ModalButtonGroup = styled.div`
  ${(props) => props.theme.flex.flexCenter}
  gap: 32px;
`;

export const ModalButton = styled(FilledButton)`
  font-size: ${(props) => props.theme.fontSize.medium};
  font-weight: ${(props) => props.theme.fontWeight.bold};
`;

export const ModalButtonGray = styled(FilledButton)`
  color: #5e5e74;
  font-size: ${(props) => props.theme.fontSize.medium};
  font-weight: ${(props) => props.theme.fontWeight.bold};
  background-color: ${(props) => props.theme.colors.gray200};
`;
