import { useMemo } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { pagesPath, pagesTo } from '~/pages/pages';

import Footer from '~/components/Footer';
import GNB from '../GNB';

const StyleLayout = () => {
  const pathname = useLocation().pathname;
  const footerPath = useMemo(
    () => [
      pagesPath.main,
      pagesPath.login,
      pagesPath.signUp,
      pagesPath.info,
      pagesTo.completed,
      pagesPath.findId,
    ],
    []
  );

  return (
    <>
      <GNB />
      <Outlet />
      {footerPath.includes(pathname) && <Footer />}
    </>
  );
};

export default StyleLayout;
