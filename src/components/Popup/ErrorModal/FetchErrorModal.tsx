import { Dispatch, SetStateAction, useRef } from 'react';
import PopupPortal from '../PopupPortal';
import styled from '~/utils/styled-components-fast';
import FilledButton from '~/components/Buttons/FilledButton';
import errorBig from '~/assets/icons/error-big.svg';
import useOnClickOutside from '../hooks';

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
  padding: 54px;
  gap: 44px;
`;
export const ModalContent = styled.div`
  width: 100%;
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
  setShowModal: Dispatch<SetStateAction<boolean>>;
};

const FetchErrorModal = (props: Props) => {
  const { setShowModal } = props;
  const modalRef = useRef<HTMLDivElement | null>(null);

  useOnClickOutside(modalRef, () => {
    setShowModal(false);
  });

  const onClickHandler = () => {
    setShowModal(false);
  };

  return (
    <PopupPortal>
      <ModalBackground ref={modalRef}>
        <ModalContainer>
          <img src={errorBig} alt="error-icon" />
          <ModalContent>잠시 후 다시 시도해주세요</ModalContent>
          <ModalButton width="328px" height="48px" onClick={onClickHandler}>
            확인
          </ModalButton>
        </ModalContainer>
      </ModalBackground>
    </PopupPortal>
  );
};

export default FetchErrorModal;
