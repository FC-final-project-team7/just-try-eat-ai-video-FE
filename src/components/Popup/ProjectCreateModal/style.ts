import styled from '~/utils/styled-components-fast';

export const ModalBackground = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 20;
`;

export const ModalContainer = styled.div`
  ${(props) => props.theme.flex.flexColumn}
  width: 928px;
  height: 530px;
  position: relative;
  border-radius: 20px;
  background-color: ${(props) => props.theme.bg.modal};
  backdrop-filter: blur(15px);
  padding: 84px 164px 88px;
  gap: 32px;
`;

export const ModalTitle = styled.span`
  font-size: ${(props) => props.theme.fontSize.xxLarge};
  font-weight: ${(props) => props.theme.fontWeight.bold};
`;

export const ModalContent = styled.div`
  display: flex;
  width: 100%;
  height: 60px;
  gap: 40px;
`;

export const ModalCloseButton = styled.div`
  position: absolute;
  top: 48px;
  right: 48px;
  cursor: pointer;
`;

export const VideoUploadButton = styled.div`
  ${(props) => props.theme.flex.flexColumn}
  width: 280px;
  height: 280px;
  background-color: ${(props) => props.theme.colors.main.purple};
  border-radius: 10px;
  padding-top: 52px;
  cursor: pointer;
  gap: 32px;
`;

export const ButtonText = styled.span`
  font-size: ${(props) => props.theme.fontSize.medium};
  font-weight: ${(props) => props.theme.fontWeight.bold};
`;

export const LoaderBlock = styled.div`
  ${(props) => props.theme.flex.flexCenter}
  width: 120px;
  height: 120px;
`;
