import { FormEvent } from 'react';
import { Link, useNavigate } from 'react-router-dom';
// import { useForm } from 'react-hook-form';

import { ILogin } from '~/types/auth';
import { useLazyLoginQuery } from '~/stores/apis/auth';
import { pagesTo } from '../pages';
// import { Tokens } from '~/stores/token';

import * as S from './style';
import logo from '~/assets/icons/logo-login.svg';
import google from '~/assets/icons/google.svg';
import naver from '~/assets/icons/naver.svg';

const LoginPage = () => {
  const [login] = useLazyLoginQuery();
  const navigate = useNavigate();
  // const { register } = useForm();

  const onSubmitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = {} as Record<string, string>;
    for (const el of e.currentTarget.elements) {
      if (!(el instanceof HTMLInputElement)) continue;
      formData[el.name] = el.value;
    }
    login(formData as unknown as ILogin);
    navigate(pagesTo.main);
  };

  return (
    <S.Container>
      <img src={logo} alt="logo" />
      <S.Form
        style={{
          display: 'flex',
          flexFlow: 'column',
        }}
        onSubmit={onSubmitHandler}
      >
        <label>
          <S.FormInput
            name="username"
            type="text"
            defaultValue="test"
            placeholder="로그인"
            // {...register('username', { required: true, maxLength: 20 })}
          />
        </label>
        <label>
          <S.FormInput
            name="password"
            type="password"
            defaultValue="1234"
            placeholder="비밀번호"
            // {...register('password', { pattern: /^[A-Za-z]+$/i })}
          />
        </label>
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
          <S.OAuthButton width="392px" height="48px">
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

      {/* <h3>login result</h3>
      <textarea rows={20} value={JSON.stringify(result, null, 2)} readOnly />
      <h3>localstorage tokens</h3>
      <textarea
      rows={10}
      value={JSON.stringify(Tokens.getBody(), null, 2)}
      readOnly
    /> */}
    </S.Container>
  );
};

export default LoginPage;
