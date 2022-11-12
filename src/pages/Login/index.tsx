import { FormEvent } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { auth } from '~/firebaseConfig';
import { signInWithPopup, GoogleAuthProvider } from 'firebase/auth';

import { ILogin } from '~/types/auth';
import { useLazyLoginQuery } from '~/stores/apis/auth';
import { pagesTo } from '../pages';
import { FORM_REG, ERROR_MSG } from '~/utils/constants';
import FormInput from '~/components/FormInput';

import * as S from './style';
import logo from '~/assets/icons/logo-login.svg';
import google from '~/assets/icons/google.svg';
import naver from '~/assets/icons/naver.svg';

type FormInputs = {
  username: string;
  password: string;
};

const LoginPage = () => {
  const [login] = useLazyLoginQuery();
  const navigate = useNavigate();
  const { register, formState } = useForm<FormInputs>({
    mode: 'onChange',
  });

  const onSubmitHandler = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = {} as Record<string, string>;
    for (const el of e.currentTarget.elements) {
      if (!(el instanceof HTMLInputElement)) continue;
      formData[el.name] = el.value;
    }
    await login(formData as unknown as ILogin);
    navigate(pagesTo.main);
  };

  const googleLoginHandler = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential?.accessToken;
        // const user = result.user;
        localStorage.setItem('accessToken', token as string);
        navigate(pagesTo.main);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <S.Container>
      <img src={logo} alt="logo" />
      <S.Form onSubmit={onSubmitHandler}>
        <S.InputGroup>
          <FormInput
            type="text"
            placeholder="아이디"
            errorMsg={formState.errors['username']?.message}
            inputProps={{
              ...register('username', {
                pattern: {
                  value: FORM_REG.regexId,
                  message: ERROR_MSG.invalidId,
                },
                required: ERROR_MSG.required,
              }),
            }}
          />
          <FormInput
            type="password"
            placeholder="비밀번호"
            errorMsg={formState.errors['password']?.message}
            inputProps={{
              ...register('password', {
                // pattern: {
                //   value: FORM_REG.regexPw,
                //   message: ERROR_MSG.invalidPw,
                // },
                required: ERROR_MSG.required,
              }),
            }}
          />
        </S.InputGroup>

        <S.FormButton width="392px" height="48px" type="submit">
          로그인
        </S.FormButton>
      </S.Form>
      <S.FindGroup>
        <Link to={pagesTo.findId}>
          <p>아이디 찾기</p>
        </Link>
        <p>|</p>
        <Link to={pagesTo.findId}>
          <p>비밀번호 찾기</p>
        </Link>
      </S.FindGroup>
      <S.OAuthGrop>
        <h2>간편 로그인</h2>
        <S.OAuthButtonGroup>
          <S.OAuthButton
            onClick={googleLoginHandler}
            width="392px"
            height="48px"
          >
            <img src={google} alt="google" />
            Google로 로그인
          </S.OAuthButton>
          <S.OAuthButton width="392px" height="48px">
            <img src={naver} alt="naver" />
            네이버로 로그인
          </S.OAuthButton>
        </S.OAuthButtonGroup>
      </S.OAuthGrop>
      <S.SignUpBlock>
        회원이 아니신가요?
        <Link to={pagesTo.signUp}>
          <p>가입하기</p>
        </Link>
      </S.SignUpBlock>
    </S.Container>
  );
};

export default LoginPage;
