import { useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { Tokens } from '~/stores/token';
import { pagesTo } from '../pages';

const RequireAuth = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const tokens = Tokens.has();

    if (!tokens) {
      navigate(pagesTo.login);
      return;
    }
  }, []);

  return (
    <>
      <Outlet />
    </>
  );
};

export default RequireAuth;
