import * as S from './style';
import { TVideoData } from '~/types/projects';
import { useState, useCallback } from 'react';
import remove from '~/assets/icons/remove.svg';

type Props = {
  video: TVideoData;
};

function VideoCard(props: Props) {
  const { video } = props;
  const [showHoverBlock, setShowHoverBlock] = useState(false);

  const onMouseOverHandler = useCallback(() => {
    setShowHoverBlock(true);
  }, [setShowHoverBlock]);

  const onMouseOutHandler = useCallback(() => {
    setShowHoverBlock(false);
  }, [setShowHoverBlock]);

  const onCardRemoveHandler = () => {
    console.log('삭제 모달 띄우기');
  };

  return (
    <S.CardBlock
      onMouseOver={onMouseOverHandler}
      onMouseOut={onMouseOutHandler}
    >
      <S.ImageBlock>
        {video.thumbnail && <img src={video.thumbnail} alt="thumbnail" />}
      </S.ImageBlock>
      <S.ProjectInfo>
        <S.ProjectTitle>{video.name}</S.ProjectTitle>
        <S.ProjectDate>{video.createdDate}</S.ProjectDate>
      </S.ProjectInfo>
      {showHoverBlock && (
        <>
          <S.CardHoverBlock />
          <S.CardHoverButtonBlock onClick={onCardRemoveHandler}>
            <img src={remove} alt="remove-icon" />
          </S.CardHoverButtonBlock>
        </>
      )}
    </S.CardBlock>
  );
}

export default VideoCard;
