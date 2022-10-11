import React, { Dispatch, SetStateAction, useRef } from 'react';
import PopupPortal from '../PopupPortal';
import * as S from './style';
import useOnClickOutside from '../hooks';
import { useDeleteProjectMutation } from '~/stores/apis/projectList';

type Props = {
  content: string;
  setShowConfirmModal: Dispatch<SetStateAction<boolean>>;
  projectId?: number | string;
};

function ConfirmModal(props: Props) {
  const { content, setShowConfirmModal, projectId } = props;
  const modalRef = useRef<HTMLDivElement | null>(null);
  const [deleteProject] = useDeleteProjectMutation();

  useOnClickOutside(modalRef, () => {
    setShowConfirmModal(false);
  });

  const onRemoveHandler = (projectId: number | string | undefined) => {
    if (projectId === undefined) return;
    deleteProject(projectId);
    setShowConfirmModal(false);
  };

  const onCancelHandler = () => {
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
              onClick={() => onRemoveHandler(projectId)}
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
