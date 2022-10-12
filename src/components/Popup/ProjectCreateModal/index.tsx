import React, {
  Dispatch,
  SetStateAction,
  useRef,
  useState,
  useEffect,
} from 'react';
import { pagesTo } from '~/pages/pages';
import { useNavigate } from 'react-router-dom';
import * as S from './style';
import PopupPortal from '../PopupPortal';
import useOnClickOutside from '../hooks';
import UploadErrorModal from '../ErrorModal/UploadErrorModal';
import {
  useTextProjectMutation,
  useAudioProjectMutation,
} from '~/stores/apis/projectCreation';

import cloud from '~/assets/icons/cloud.svg';
import text from '~/assets/icons/text.svg';
import close from '~/assets/icons/close.svg';

type Props = {
  setShowModal: Dispatch<SetStateAction<boolean>>;
};

const ProjectCreateModal = (props: Props) => {
  const { setShowModal } = props;
  const [showErrorModal, setShowErrorModal] = useState(false);
  const navigate = useNavigate();

  const inputRef = useRef<HTMLInputElement | null>(null);
  const modalRef = useRef<HTMLDivElement | null>(null);

  const [textProject] = useTextProjectMutation();
  const [audioProject, { error: audioError }] = useAudioProjectMutation();

  useEffect(() => {
    if (audioError) {
      setShowErrorModal(true);
    }
  }, [audioError]);

  useOnClickOutside(modalRef, () => {
    if (audioError) return;
    setShowModal(false);
  });

  const onModalCloseHandler = () => {
    setShowModal(false);
  };

  const onFileUploadHandler = () => {
    inputRef.current?.click();
  };

  const onUploadAudio = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.currentTarget.files?.[0];
    if (!file) return;
    const formData = new FormData();

    formData.append('audioFile', file);
    await audioProject(formData);
  };

  const onMoveTextHandler = async () => {
    try {
      const payloadData = await textProject().unwrap();
      navigate(pagesTo.text(payloadData.projectId));
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <>
      <PopupPortal>
        <S.ModalBackground ref={modalRef}>
          <S.ModalContainer>
            <S.ModalTitle>음성을 보유하고 계신가요?</S.ModalTitle>
            <S.ModalContent>
              {/* 음성 업로드 버튼! */}
              <S.VideoUploadButton onClick={onFileUploadHandler}>
                <img src={cloud} alt="upload-icon" />
                <S.ButtonText>음성 업로드하기</S.ButtonText>
                <input
                  name="audioFile"
                  type="file"
                  accept="audio/*"
                  style={{ display: 'none' }}
                  ref={inputRef}
                  onChange={onUploadAudio}
                />
              </S.VideoUploadButton>

              <S.VideoUploadButton onClick={onMoveTextHandler}>
                <img src={text} alt="text-icon" />
                <S.ButtonText>텍스트 입력으로 이동</S.ButtonText>
              </S.VideoUploadButton>
            </S.ModalContent>
            <S.ModalCloseButton onClick={onModalCloseHandler}>
              <img src={close} alt="close-icon" />
            </S.ModalCloseButton>
          </S.ModalContainer>
        </S.ModalBackground>
      </PopupPortal>
      {showErrorModal && (
        <UploadErrorModal
          content="음성 업로드에 실패했습니다. 다시 시도해주세요"
          setShowErrorModal={setShowErrorModal}
        />
      )}
    </>
  );
};

export default ProjectCreateModal;
