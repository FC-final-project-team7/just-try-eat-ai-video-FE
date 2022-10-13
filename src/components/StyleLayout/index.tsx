import { Outlet } from 'react-router-dom';
import Footer from '~/components/Footer';

const StyleLayout = () => {
  return (
    <>
      <Outlet />
      <Footer />
    </>
  );
};

export default StyleLayout;
