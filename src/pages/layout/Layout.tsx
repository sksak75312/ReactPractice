import Header from '../../components/global/Header';
import { Box } from '@mui/material';
import { Outlet } from 'react-router-dom';

function Layout() {
  return (
    <>
      <Header />
      <Box component='main'>
        <Outlet />
      </Box>
    </>
  );
}

export default Layout;
