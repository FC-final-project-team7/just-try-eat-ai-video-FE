import React, { Dispatch, SetStateAction, useRef } from 'react';
import PopupPortal from '../PopupPortal';
import * as S from './style';
import useOnClickOutside from '../hooks';

type Props = {
  content: string;
  setShowConfirmModal: Dispatch<SetStateAction<boolean>>;
};

function ConfirmModal(props: Props) {
  const { content, setShowConfirmModal } = props;
  const modalRef = useRef<HTMLDivElement | null>(null);

  useOnClickOutside(modalRef, () => {
    setShowConfirmModal(false);
  });

  // project id 넘겨주기
  const onRemoveHandler = () => {
    console.log('프로젝트 삭제 완료');
    setShowConfirmModal(false);
  };

  const onCancelHandler = () => {
    console.log('취소');
    setShowConfirmModal(false);
  };

  return (
    <PopupPortal>
      <S.ModalBackground ref={modalRef}>
        <S.ModalContainer>
          <S.ModalContent>{content}</S.ModalContent>
          <S.ModalButtonGroup>
            {/* 프로젝트 리스트에서 보여질 삭제/취소 */}
            <S.ModalButton
              width="148px"
              height="48px"
              onClick={onRemoveHandler}
            >
              삭제
            </S.ModalButton>
            <S.ModalButtonGray
              width="148px"
              height="48px"
              onClick={onCancelHandler}
            >
              취소
            </S.ModalButtonGray>
          </S.ModalButtonGroup>
        </S.ModalContainer>
      </S.ModalBackground>
    </PopupPortal>
  );
}

export default ConfirmModal;
