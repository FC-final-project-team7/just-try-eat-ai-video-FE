import { useForm } from 'react-hook-form';
import { FORM_REG, ERROR_MSG } from '~/utils/constants';
import * as S from './style';
import Stepper from '../Stepper';
import Heading from '~/components/Heading';
import FormInput from '~/components/FormInput';

type FormInputs = {
  userId: string;
  username: string;
  email: string;
  password: string;
  passwordConfirm: string;
};

const Info = () => {
  const { register, formState, getValues, handleSubmit } = useForm<FormInputs>({
    mode: 'onChange',
  });

  // TODO 내용 없으면 가입 막기
  const onSubmit = () => {
    console.log('가입완료');
  };

  return (
    <S.Container>
      <Heading>회원가입</Heading>
      <Stepper />
      <form onSubmit={handleSubmit(onSubmit)}>
        <S.InputList>
          <FormInput
            type="text"
            label="아이디"
            errorMsg={formState.errors['userId']?.message}
            inputProps={{
              ...register('userId', {
                pattern: {
                  value: FORM_REG.regexId,
                  message: ERROR_MSG.invalidId,
                },
              }),
            }}
          />
          <FormInput
            type="text"
            label="이름"
            errorMsg={formState.errors['username']?.message}
            inputProps={{
              ...register('email', {
                pattern: {
                  value: FORM_REG.regexEmail,
                  message: ERROR_MSG.invalidEmail,
                },
              }),
            }}
          />
          <S.EmailInputGroup>
            <FormInput type="text" label="이메일 주소" width="290px" />
            {/* 인증하기 API 추가 */}
            <S.EmailAuthButton width="91px" height="48px">
              인증하기
            </S.EmailAuthButton>
          </S.EmailInputGroup>

          <FormInput
            type="password"
            label="비밀번호"
            errorMsg={formState.errors['password']?.message}
            inputProps={{
              ...register('password', {
                pattern: {
                  value: FORM_REG.regexPw,
                  message: ERROR_MSG.invalidPw,
                },
              }),
            }}
          />
          <FormInput
            type="password"
            label="비밀번호 확인"
            errorMsg={formState.errors['passwordConfirm']?.message}
            inputProps={{
              type: 'password',
              ...register('passwordConfirm', {
                validate: (value) =>
                  value === getValues('password') || ERROR_MSG.invalidConfirmPw,
              }),
            }}
          />
        </S.InputList>
        <S.SignUpButton width="392px" height="48px">
          회원가입
        </S.SignUpButton>
      </form>
    </S.Container>
  );
};
export default Info;
