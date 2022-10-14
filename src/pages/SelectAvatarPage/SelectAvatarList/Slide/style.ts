import styled from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';

export const SliderRoot = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: absolute;
  width: 100%;
  height: 100%;
`;

export const StyledButton = styled.button`
  position: relative;
  margin: 10px;
  background: none;
  border: none;
  cursor: pointer;
`;

export const Slider = styled(Swiper)`
  position: absolute;
  top: 68px;
  left: 64px;
  width: 552px;
  height: 132px;
`;

export const SliderItem = styled(SwiperSlide)`
  background-color: #fff;
  border-radius: 4px;
`;

export const ItemName = styled.p`
  position: relative;
  bottom: 20px;
  color: #000;
  text-align: center;
`;
