import Header from '../../components/global/Header';
import { Outlet } from 'react-router-dom';

function Layout() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}

export default Layout;
