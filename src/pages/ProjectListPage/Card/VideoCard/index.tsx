import * as S from './style';
import { TVideoData } from '~/types/projects';
import { useState, useCallback } from 'react';
import remove from '~/assets/icons/remove.svg';
import ConfirmModal from '~/components/Popup/ConfirmModal';
import VideoDownloadModal from '~/components/Popup/VideoDownloadModal';
import Loader from '~/components/Popup/Loaders/Loader';

type Props = {
  video: TVideoData;
};

function VideoCard(props: Props) {
  const { video } = props;
  const [showHoverBlock, setShowHoverBlock] = useState(false);
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const [showDownloadModal, setShowDownloadModal] = useState(false);

  const onMouseOverHandler = useCallback(() => {
    setShowHoverBlock(true);
  }, [setShowHoverBlock]);

  const onMouseOutHandler = useCallback(() => {
    setShowHoverBlock(false);
  }, [setShowHoverBlock]);

  const onCardRemoveHandler = () => {
    setShowConfirmModal(true);
  };

  const onCardClickHandler = () => {
    setShowDownloadModal(true);
  };

  return (
    <>
      <S.CardBlock
        onMouseOver={onMouseOverHandler}
        onMouseOut={onMouseOutHandler}
        onClick={onCardClickHandler}
      >
        <S.ImageBlock>
          {video.generated ? (
            <img src={video.thumbnail} alt="thumbnail" />
          ) : (
            <Loader />
          )}
        </S.ImageBlock>
        <S.ProjectInfo>
          <S.ProjectTitle>{video.name}</S.ProjectTitle>
          <S.ProjectDate>
            {video.generated ? video.createdDate : '생성중'}
          </S.ProjectDate>
        </S.ProjectInfo>
        {showHoverBlock && (
          <>
            <S.CardHoverBlock />
            <S.CardHoverButtonBlock onClick={onCardRemoveHandler}>
              <img src={remove} alt="remove-icon" />
            </S.CardHoverButtonBlock>
          </>
        )}
        {showConfirmModal && (
          <ConfirmModal
            content="해당 프로젝트를 삭제할까요?"
            setShowConfirmModal={setShowConfirmModal}
          />
        )}
      </S.CardBlock>
      {video.generated && showDownloadModal && (
        <VideoDownloadModal
          setShowDownloadModal={setShowDownloadModal}
          videoName={video.name}
          videoDate={video.createdDate}
        />
      )}
    </>
  );
}

export default VideoCard;
