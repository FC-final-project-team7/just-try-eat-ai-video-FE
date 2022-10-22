import * as S from './style';
import stepperLine1 from '~/assets/images/signup-line-1.svg';

const Stepper = () => {
  return (
    <>
      <S.FirstStepper>
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
      </S.FirstStepper>
    </>
  );
};

export default Stepper;
