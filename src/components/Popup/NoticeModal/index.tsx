import { Dispatch, SetStateAction } from 'react';
import PopupPortal from '../PopupPortal';
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
  background-color: rgba(41, 41, 81, 0.8);
  backdrop-filter: blur(15px);
  padding: 120px 98px 60px;
  gap: 72px;
`;
export const ModalContent = styled.div`
  width: 100%;
  /* height: 60px; */
  font-size: ${(props) => props.theme.fontSize.large};
  font-weight: ${(props) => props.theme.fontWeight.regular};
  white-space: pre-wrap;
  text-align: center;
`;
export const ModalButton = styled(FilledButton)`
  font-size: ${(props) => props.theme.fontSize.medium};
  font-weight: ${(props) => props.theme.fontWeight.bold};
  cursor: pointer;
`;

type Props = {
  content: string;
  setShowModal: Dispatch<SetStateAction<boolean>>;
};

const NoticeModal = (props: Props) => {
  const { content, setShowModal } = props;

  const onClickHandler = () => {
    setShowModal(false);
  };

  return (
    <PopupPortal>
      <ModalBackground>
        <ModalContainer>
          <ModalContent>{content}</ModalContent>
          <ModalButton width="328px" height="48px" onClick={onClickHandler}>
            확인
          </ModalButton>
        </ModalContainer>
      </ModalBackground>
    </PopupPortal>
  );
};

export default NoticeModal;
