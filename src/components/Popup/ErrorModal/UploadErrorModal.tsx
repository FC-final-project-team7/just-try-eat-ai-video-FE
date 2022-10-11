import { Dispatch, SetStateAction } from 'react';
import PopupPortal from '../PopupPortal';
import styled from 'styled-components';
import errorClose from '~/assets/icons/error-close.svg';
import error from '~/assets/icons/error.svg';

export const ModalBackground = styled.div`
  position: fixed;
  top: 20%;
  left: 50%;
  transform: translate(-20%, -50%);
  z-index: 20;
`;
export const ModalContainer = styled.div`
  ${(props) => props.theme.flex.flexBetween}
  width: 582px;
  height: 104px;
  border-radius: 12px;
  background-color: ${(props) => props.theme.bg.modal};
  backdrop-filter: blur(15px);
  padding: 32px 40px 32px;
`;
export const ModalContent = styled.div`
  font-size: ${(props) => props.theme.fontSize.large};
  font-weight: ${(props) => props.theme.fontWeight.regular};
  text-align: center;
`;
export const ModalCloseButton = styled.div`
  cursor: pointer;
`;

type Props = {
  content: string;
  setShowErrorModal: Dispatch<SetStateAction<boolean>>;
};

const UploadErrorModal = (props: Props) => {
  const { content, setShowErrorModal } = props;

  const onModalCloseHandler = () => {
    setShowErrorModal(false);
  };

  return (
    <PopupPortal>
      <ModalBackground>
        <ModalContainer>
          <img src={error} alt="error-icon" />
          <ModalContent>{content}</ModalContent>
          <ModalCloseButton onClick={onModalCloseHandler}>
            <img src={errorClose} alt="close-icon" />
          </ModalCloseButton>
        </ModalContainer>
      </ModalBackground>
    </PopupPortal>
  );
};

export default UploadErrorModal;
