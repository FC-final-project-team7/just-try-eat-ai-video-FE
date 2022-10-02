import React, { Dispatch, SetStateAction, useRef } from 'react';
import * as S from './style';
import PopupPortal from '../PopupPortal';
import useOnClickOutside from '../hooks';
import cloud from '~/assets/icons/cloud.svg';
import text from '~/assets/icons/text.svg';
import close from '~/assets/icons/close.svg';

import { pagesTo } from '~/pages/pages';
import { Link } from 'react-router-dom';

type Props = {
  setShowModal: Dispatch<SetStateAction<boolean>>;
};

const ProjectSelectModal = (props: Props) => {
  const { setShowModal } = props;
  const inputRef = useRef<HTMLInputElement | null>(null);
  const modalRef = useRef<HTMLDivElement | null>(null);

  useOnClickOutside(modalRef, () => {
    setShowModal(false);
  });

  const onFileUploadHandler = () => {
    inputRef.current?.click();
  };

  const onModalCloseHandler = () => {
    setShowModal(false);
  };

  return (
    <PopupPortal>
      <S.ModalBackground ref={modalRef}>
        <S.ModalContainer>
          <S.ModalTitle>음성을 보유하고 계신가요?</S.ModalTitle>
          <S.ModalContent>
            <S.VideoUploadButton onClick={onFileUploadHandler}>
              <img src={cloud} alt="upload-icon" />
              <S.ButtonText>음성 업로드하기</S.ButtonText>
              <input type="file" style={{ display: 'none' }} ref={inputRef} />
            </S.VideoUploadButton>
            {/* // TODO 경로 수정 */}
            <Link to={pagesTo.main}>
              <S.VideoUploadButton>
                <img src={text} alt="text-icon" />
                <S.ButtonText>텍스트 입력으로 이동</S.ButtonText>
              </S.VideoUploadButton>
            </Link>
          </S.ModalContent>
          <S.ModalCloseButton onClick={onModalCloseHandler}>
            <img src={close} alt="text-icon" />
          </S.ModalCloseButton>
        </S.ModalContainer>
      </S.ModalBackground>
    </PopupPortal>
  );
};

export default ProjectSelectModal;
