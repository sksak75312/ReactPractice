import { Link } from 'react-router-dom';
import { Box, Container } from '@mui/material';

import MenuIcon from '@mui/icons-material/Menu';

import styles from './Header.module.css';
const navbarData = [
  {
    id: crypto.randomUUID(),
    path: '/',
    name: 'Home',
  },
  {
    id: crypto.randomUUID(),
    path: '/mealsystem',
    name: 'MealSystem',
  },
];

function Header() {
  return (
    <Box style={{ backgroundColor: '#2196f3' }}>
      <Container className={styles['container']}>
        <ul className={styles['list']}>
          {navbarData.map((data) => (
            <li key={data.id}>
              <Link to={data.path}>{data.name}</Link>
            </li>
          ))}
        </ul>
      </Container>
    </Box>
  );
}

export default Header;
