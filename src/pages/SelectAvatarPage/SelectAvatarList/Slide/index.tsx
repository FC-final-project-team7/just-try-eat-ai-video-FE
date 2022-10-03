import React, { useEffect, useRef, useState } from 'react';
import * as S from './style';
import { SwiperProps } from 'swiper/react/swiper-react';
import { Navigation } from 'swiper';

// test
import { PROJECT_DATA } from '~/pages/ProjectListPage/data';

interface AvatarSliderProps {
  // avatarList: ReactElement[];

  // https://subji.github.io/posts/2020/03/03/howtovalidatepropertiesdefault 참조해보세용
  slidesPerView: 4;
}

function AvatarSlider(props: AvatarSliderProps) {
  const { /*avatarList,*/ slidesPerView } = props;

  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);
  const [swiperSetting, setSwiperSetting] = useState<SwiperProps | null>(null);

  useEffect(() => {
    if (!prevRef.current || !nextRef.current) return;

    if (!swiperSetting) {
      setSwiperSetting({
        modules: [Navigation],
        spaceBetween: 20,
        navigation: {
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        },
        slidesPerView: 4,
        slidesPerGroup: 4,
        onBeforeInit: (swiper) => {
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
