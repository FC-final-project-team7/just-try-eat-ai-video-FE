import { useLazyLoginQuery } from '~/stores/apis/auth';
import { FormEvent } from 'react';
import { ILogin } from '~/types/auth';
import { Tokens } from '~/stores/token';

const LoginPage = () => {
  const [login, result] = useLazyLoginQuery();

  const onSubmitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = {} as Record<string, string>;
    for (const el of e.currentTarget.elements) {
      if (!(el instanceof HTMLInputElement)) continue;
      formData[el.name] = el.value;
    }
    login(formData as unknown as ILogin);
  };

  return (
    <form
      style={{
        display: 'flex',
        flexFlow: 'column',
      }}
      onSubmit={onSubmitHandler}
    >
      <label>
        아이디 <input type="text" name="username" defaultValue="test" />
      </label>
      <label>
        비밀번호 <input type="text" name="password" defaultValue="test" />
      </label>
      <button type="submit">로그인</button>
      <h3>login result</h3>
      <textarea rows={20} value={JSON.stringify(result, null, 2)} readOnly />
      <h3>localstorage tokens</h3>
      <textarea
        rows={10}
        value={JSON.stringify(Tokens.getBody(), null, 2)}
        readOnly
      />
    </form>
  );
};

export default LoginPage;
