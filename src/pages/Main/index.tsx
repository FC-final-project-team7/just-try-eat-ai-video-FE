import * as S from './style';
import { Link } from 'react-router-dom';
import { pagesTo } from '../pages';

import mainImg from '~/assets/images/main.png';
import videoImg from '~/assets/images/video.png';
import play from '~/assets/icons/video-play.svg';
import advantageImg1 from '~/assets/icons/advantage-1.svg';
import advantageImg2 from '~/assets/icons/advantage-2.svg';
import advantageImg3 from '~/assets/icons/advantage-3.svg';
import processBorder1 from '~/assets/images/process-border-1.svg';
import processBorder2 from '~/assets/images/process-border-2.svg';
import processText1 from '~/assets/images/process-text-1.svg';
import processText2 from '~/assets/images/process-text-2.svg';
import processAvartar from '~/assets/images/process-avatar.svg';
import processCheck from '~/assets/images/process-check.svg';
import processCloud from '~/assets/images/process-cloud.svg';
import processLogo from '~/assets/images/process-logo.svg';

import video from '~/assets/videos/demo-video.mp4';

import FilledButton from '~/components/Buttons/FilledButton';
import { useCallback, useState } from 'react';

const MainPage = () => {
  const [showVideo, setShowVideo] = useState(false);

  const onClickVideoHandler = useCallback(() => {
    setShowVideo(true);
  }, [setShowVideo]);

  return (
    <>
      <S.MainSection>
        <S.MainContents>
          <S.LeftTextGroup>
            <S.Title>본 서비스로 시공간을 초월하세요</S.Title>
            <S.Description>
              본 서비스는 인공지능과 영상기술의 융합을 통해 <br /> 영상 안에서
              시간과 공간, 능력을 초월하기 위한 서비스입니다.
            </S.Description>
          </S.LeftTextGroup>
          <Link to={pagesTo.projects}>
            <FilledButton width="200px" height="48px">
              프로젝트 시작하기
            </FilledButton>
          </Link>
        </S.MainContents>
        <img src={mainImg} alt="avatar selcet" />
      </S.MainSection>

      <S.VideoSection>
        {showVideo && (
          <video autoPlay controls width="640">
            <source src={video} type="video/mp4" />
          </video>
        )}
        {!showVideo && (
          <S.VideoImgBlock onClick={onClickVideoHandler}>
            <img src={videoImg} alt="demo video" />
            <S.PlayButton>
              <img src={play} alt="play-icon" />
            </S.PlayButton>
          </S.VideoImgBlock>
        )}
        <S.LeftTextGroup>
          <S.Title>AI 아바타 서비스를 소개합니다</S.Title>
          <S.Description>
            AI 아바타에서는 입력만으로 디지털 휴먼이 말을 하는 <br />
            영상이 완성됩니다. 다양한 외국어로도 가능합니다.
          </S.Description>
        </S.LeftTextGroup>
      </S.VideoSection>

      <S.AdvantageSection>
        <S.CenterTextGrop>
          <S.Title>영상 제작의 피로도를 0%로</S.Title>
          <S.Description>
            간단한 과정으로 누구나 손쉽게 제작가능합니다
          </S.Description>
        </S.CenterTextGrop>
        <S.AdvantageList>
          <S.AdvantageItem>
            <img src={advantageImg1} alt="간편하고 빠른 영상 제작" />
            <S.ItemText>
              간편하고 빠른 영상 제작
              <br /> 영상 제작 비용 감소
            </S.ItemText>
          </S.AdvantageItem>
          <S.AdvantageItem>
            <img src={advantageImg2} alt="텍스트 수정만으로 재사용 가능" />
            <S.ItemText>
              텍스트 수정만으로
              <br /> 재사용 가능
            </S.ItemText>
          </S.AdvantageItem>
          <S.AdvantageItem>
            <img src={advantageImg3} alt="다국어 음성 제공" />
            <S.ItemText>
              자연스럽고 다양한
              <br /> 다국어 음성 제공
            </S.ItemText>
          </S.AdvantageItem>
        </S.AdvantageList>
        <S.SentenceBlock>
          <S.Sentence>
            그동안 많은 비용과 시간 그리고 매번 반복되는 복잡한 과정 때문에 영상
            제작이 어려우셨다면 <br /> AI 아바타 서비스를 통해 합리적인 비용과
            다국어 음성지원으로 손쉽게 영상을 제작해보세요!
          </S.Sentence>
        </S.SentenceBlock>
      </S.AdvantageSection>

      <S.ProcessSection>
        <S.ProcessContent>
          <S.ProcessBg>
            <S.CenterTextGrop>
              <S.Title>Process</S.Title>
              <S.Description>
                음성 파일 여부에 따라 다른 과정으로 누구나 손쉽게 영상 제작이
                가능합니다.
              </S.Description>
            </S.CenterTextGrop>
            <S.ProcessGroup>
              <S.ProcessLine>
                <img src={processBorder1} alt="process Line" />
              </S.ProcessLine>
              <S.ProcessList>
                <S.ProcessItem>
                  <S.ItemBg>
                    <img src={processText1} alt="텍스트 입력" />
                  </S.ItemBg>
                  <S.ItemTitle>텍스트 입력</S.ItemTitle>
                  <S.ItemDescription>
                    스크립트 입력 후 <br />
                    언어 및 목소리 선택하기
                  </S.ItemDescription>
                </S.ProcessItem>
                <S.ProcessItem>
                  <S.ItemBg>
                    <img src={processText2} alt="텍스트 수정" />
                  </S.ItemBg>
                  <S.ItemTitle>텍스트 수정</S.ItemTitle>
                  <S.ItemDescription>
                    음성 변환된 텍스트를 <br />
                    미리 들어보고 수정하기
                  </S.ItemDescription>
                </S.ProcessItem>
                <S.ProcessItem>
                  <S.ItemBg>
                    <img src={processAvartar} alt="아바타 선택" />
                  </S.ItemBg>
                  <S.ItemTitle>아바타 선택</S.ItemTitle>
                  <S.ItemDescription>
                    마음에 드는 아바타 <br />
                    선택하기
                  </S.ItemDescription>
                </S.ProcessItem>
                <S.ProcessItem>
                  <S.ItemBg>
                    <img src={processCheck} alt="완성" />
                  </S.ItemBg>
                  <S.ItemTitle>완성</S.ItemTitle>
                  <S.ItemDescription>
                    클릭 한번으로 <br />
                    AI아바타 영상 생성!
                  </S.ItemDescription>
                </S.ProcessItem>
              </S.ProcessList>
            </S.ProcessGroup>

            <S.SecondProcessGroup>
              <S.ProcessLine>
                <img src={processBorder2} alt="process Line" />
              </S.ProcessLine>
              <S.SecondProcessList>
                <S.ProcessItem>
                  <S.UploadIcon>
                    <S.ItemBg>
                      <img src={processCloud} alt="음성 업로드" />
                    </S.ItemBg>
                    <S.ItemTitle>음성 업로드</S.ItemTitle>
                    <S.ItemDescription>
                      보유한 음성파일 <br />
                      업로드하기
                    </S.ItemDescription>
                  </S.UploadIcon>
                </S.ProcessItem>

                <S.ProcessItem>
                  <S.ItemBg>
                    <img src={processAvartar} alt="아바타 선택" />
                  </S.ItemBg>
                  <S.ItemTitle>아바타 선택</S.ItemTitle>
                  <S.ItemDescription>
                    마음에 드는 아바타 <br />
                    선택하기
                  </S.ItemDescription>
                </S.ProcessItem>
                <S.ProcessItem>
                  <S.ItemBg>
                    <img src={processCheck} alt="완성" />
                  </S.ItemBg>
                  <S.ItemTitle>완성</S.ItemTitle>
                  <S.ItemDescription>
                    클릭 한번으로 <br />
                    AI아바타 영상 생성!
                  </S.ItemDescription>
                </S.ProcessItem>
              </S.SecondProcessList>
            </S.SecondProcessGroup>
            <S.ProcessLogoBlock>
              <S.ProcessLogoTitle>무한한 영상세계</S.ProcessLogoTitle>
              {/* <img src={processLogo} alt="logo" /> */}
            </S.ProcessLogoBlock>
          </S.ProcessBg>
        </S.ProcessContent>
      </S.ProcessSection>
    </>
  );
};

export default MainPage;
