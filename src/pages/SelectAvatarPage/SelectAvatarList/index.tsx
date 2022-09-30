import React from 'react';
import * as S from './style';
import Slide from './Slide';

function index() {
  return (
    <S.Container>
      <S.InfoText>아바타를 선택해주세요</S.InfoText>
      <Slide />
    </S.Container>
  );
}

export default index;
