import VideoCard from '../../Card/VideoCard';
import * as S from './style';
import { useGetVideosQuery } from '~/stores/apis/videoList';

function VideoList() {
  const { data } = useGetVideosQuery();
  return (
    <S.ListBlock>
      <S.ListTitle>영상 리스트</S.ListTitle>
      {data?.length === 0 ? (
        <S.EmptyBlock>
          <S.EmptyBlockTitle>생성된 영상이 없습니다</S.EmptyBlockTitle>
        </S.EmptyBlock>
      ) : (
        <S.ListCard>
          {data?.map((video) => (
            <VideoCard key={video.videoId} video={video} />
          ))}
        </S.ListCard>
      )}
    </S.ListBlock>
  );
}

export default VideoList;
