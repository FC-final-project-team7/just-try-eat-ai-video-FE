import VideoCard from '../../Card/VideoCard';
import * as S from './style';
import { useGetVideosQuery } from '~/stores/apis/videoList';
import Loader from '~/components/Popup/Loaders/Loader';

function VideoList() {
  const { data, isLoading } = useGetVideosQuery();
  return (
    <S.ListBlock>
      <S.ListTitle>영상 리스트</S.ListTitle>
      {isLoading ? (
        <S.LoaderBlock>
          <Loader />
        </S.LoaderBlock>
      ) : data?.length === 0 ? (
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
