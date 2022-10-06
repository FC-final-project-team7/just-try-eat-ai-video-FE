import styled from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';

export const SliderRoot = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

export const StyledButton = styled.button`
  position: relative;
  bottom: 20px;
  margin: 10px;
  background: none;
  border: none;
  cursor: pointer;
`;

export const Slider = styled(Swiper)`
  width: 552px;
`;

export const SliderItem = styled(SwiperSlide)`
  img {
    width: 120px;
    height: 132px;
    background-color: #fff;
    border-radius: 4px;
  }
`;

export const ItemName = styled.p`
  color: #fff;
  text-align: center;
`;
