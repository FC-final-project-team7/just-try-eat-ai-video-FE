import React, { ReactElement, useEffect, useRef, useState } from 'react';
import * as S from './style';
import 'swiper/css';
import SwiperCore, { Navigation } from 'swiper';

// test
import { PROJECT_DATA } from '~/pages/ProjectListPage/data';

// interface AvatarSliderProps {
//   avatarList: ReactElement[];
//   slidesPerView: 4;
// }

function AvatarSlider(props: AvatarSliderProps) {
  const { avatarList, slidesPerView } = props;

  // 슬라이더에서 사용할 기능 추가
  SwiperCore.use([Navigation]);

  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);
  const [swiperSetting, setSwiperSetting] = useState<Swiper | null>(null);

  useEffect(() => {
    if (!swiperSetting) {
      setSwiperSetting({
        spaceBetween: 20,
        navigation: {
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        },
        slidesPerView: 4,
        slidesPerGroup: 4,
        onBeforeInit: (swiper: SwiperCore) => {
          if (typeof swiper.params.navigation !== 'boolean') {
            if (swiper.params.navigation) {
              swiper.params.navigation.prevEl = prevRef.current;
              swiper.params.navigation.nextEl = nextRef.current;
            }
          }
          swiper.navigation.update();
        },
      });
    }
  }, [swiperSetting, slidesPerView]);

  return (
    <S.SliderRoot>
      <S.StyledButton ref={prevRef}>
        <img
          src="https://cdn-icons-png.flaticon.com/512/189/189254.png"
          alt="prev"
          width={32}
          height={32}
        />
      </S.StyledButton>
      {swiperSetting && (
        <S.Slider {...swiperSetting}>
          {/* {avatarList.map(avatar)=>(<S.SliderItem key={avatar.key}>{avatar}</S.SliderItem>)} */}

          {PROJECT_DATA?.map((project) => (
            <>
              <S.SliderItem key={project.projectId}>
                {project.thumbnail && (
                  <img src={project.thumbnail} alt="thumbnail" />
                )}
                <S.ItemName>{project.name}</S.ItemName>
              </S.SliderItem>
            </>
          ))}
        </S.Slider>
      )}
      <S.StyledButton ref={nextRef}>
        <img
          src="https://cdn-icons-png.flaticon.com/512/181/181669.png"
          alt="next"
          width={32}
          height={32}
        />
      </S.StyledButton>
    </S.SliderRoot>
  );
}

export default AvatarSlider;
