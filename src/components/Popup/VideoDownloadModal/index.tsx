import { Dispatch, SetStateAction, useRef } from 'react';
import styled from 'styled-components';
import FilledButton from '~/components/Buttons/FilledButton';
import close from '~/assets/icons/close.svg';
import PopupPortal from '../PopupPortal';
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
  width: 1200px;
  height: 800px;
  position: relative;
  border-radius: 20px;
  background-color: ${(props) => props.theme.bg.modal};
  box-shadow: 0px 20px 40px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(15px);
`;
export const VideoInfo = styled.div`
  position: absolute;
  top: 48px;
  left: 48px;
  margin-bottom: 88px;
`;
export const VideoTitle = styled.div`
  font-size: ${(props) => props.theme.fontSize.xxLarge};
  font-weight: ${(props) => props.theme.fontWeight.regular};
`;
export const VideoDate = styled.div`
  font-size: ${(props) => props.theme.fontSize.medium};
  font-weight: ${(props) => props.theme.fontWeight.medium};
  color: ${(props) => props.theme.colors.sub.purple};
`;
export const PreviewBlock = styled.div`
  width: 720px;
  height: 400px;
  border-radius: 20px;
  background-color: #f1f1f1;
  margin: 200px 0 56px;
`;
export const ModalCloseButton = styled.div`
  position: absolute;
  top: 48px;
  right: 48px;
  cursor: pointer;
`;

type Props = {
  setShowDownloadModal: Dispatch<SetStateAction<boolean>>;
  videoName: string;
  videoDate: string;
};

const VideoDownloadModal = (props: Props) => {
  const { setShowDownloadModal, videoName, videoDate } = props;
  const modalRef = useRef<HTMLDivElement | null>(null);

  useOnClickOutside(modalRef, () => {
    setShowDownloadModal(false);
  });

  const onModalCloseHandler = () => {
    setShowDownloadModal(false);
  };

  return (
    <PopupPortal>
      <ModalBackground ref={modalRef}>
        <ModalContainer>
          <VideoInfo>
            <VideoTitle>{videoName}</VideoTitle>
            <VideoDate>{`${videoDate} 생성`}</VideoDate>
          </VideoInfo>
          <PreviewBlock></PreviewBlock>
          <FilledButton width="328px" height="48px">
            다운로드
          </FilledButton>
          <ModalCloseButton onClick={onModalCloseHandler}>
            <img src={close} alt="close-icon" />
          </ModalCloseButton>
        </ModalContainer>
      </ModalBackground>
    </PopupPortal>
  );
};

export default VideoDownloadModal;
