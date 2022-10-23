import { useLocation } from 'react-router-dom';
import { pagesTo } from '~/pages/pages';
import * as S from './style';
import stepperLine1 from '~/assets/images/signup-line-1.svg';
import stepperLine2 from '~/assets/images/signup-line-2.svg';

const Stepper = () => {
  const location = useLocation().pathname;

  return (
    <>
      {location === pagesTo.signUp && (
        <S.StepperContainer>
          <S.StepperLine>
            <img src={stepperLine1} alt="line" />
          </S.StepperLine>
          <S.CircleList>
            <S.CircleItem>
              <S.ActiveCircle />
              <S.CircleTitle>약관</S.CircleTitle>
            </S.CircleItem>
            <S.CircleItem>
              <S.Circle />
              <S.CircleTitle>정보입력</S.CircleTitle>
            </S.CircleItem>
            <S.CircleItem>
              <S.Circle />
              <S.CircleTitle>가입완료</S.CircleTitle>
            </S.CircleItem>
          </S.CircleList>
        </S.StepperContainer>
      )}

      {location === pagesTo.info && (
        <S.StepperContainer>
          <S.StepperLine>
            <img src={stepperLine1} alt="line" />
          </S.StepperLine>
          <S.CircleList>
            <S.CircleItem>
              <S.ActiveCircle />
              <S.CircleTitle>약관</S.CircleTitle>
            </S.CircleItem>
            <S.CircleItem>
              <S.ActiveCircle />
              <S.CircleTitle>정보입력</S.CircleTitle>
            </S.CircleItem>
            <S.CircleItem>
              <S.Circle />
              <S.CircleTitle>가입완료</S.CircleTitle>
            </S.CircleItem>
          </S.CircleList>
        </S.StepperContainer>
      )}

      {location === pagesTo.completed && (
        <S.StepperContainer>
          <S.StepperLine>
            <img src={stepperLine2} alt="line" />
          </S.StepperLine>
          <S.CircleList>
            <S.CircleItem>
              <S.ActiveCircle />
              <S.CircleTitle>약관</S.CircleTitle>
            </S.CircleItem>
            <S.CircleItem>
              <S.ActiveCircle />
              <S.CircleTitle>정보입력</S.CircleTitle>
            </S.CircleItem>
            <S.CircleItem>
              <S.ActiveCircle />
              <S.CircleTitle>가입완료</S.CircleTitle>
            </S.CircleItem>
          </S.CircleList>
        </S.StepperContainer>
      )}
    </>
  );
};

export default Stepper;
