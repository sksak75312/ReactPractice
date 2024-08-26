import { useState } from 'react';
import { Link } from 'react-router-dom';
import { BackdropProps, Box, Button, Container, Drawer, List, ListItem } from '@mui/material';

import MenuIcon from '@mui/icons-material/Menu';

import styles from './Header.module.scss';
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
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleOpen = () => {
    setIsOpen(pre => !pre)
  }
  return (
    <Box style={{ backgroundColor: '#2196f3' }}>
      <Container className={styles['container']}>
        <ul className={styles['list']}>
          {navbarData.map((data) => (
            <li key={data.id}>
              <Link className={styles['list-item']} to={data.path}>
                {data.name}
              </Link>
            </li>
          ))}
        </ul>
        <Button className={styles['burger']} size="large" color="primary" onClick={toggleOpen}>
          <MenuIcon style={{ fontSize: '2rem' }} />
        </Button>
        <Drawer open={isOpen} onClose={toggleOpen}>
          <List>
            {navbarData.map((data) => (
              <ListItem key={data.id}>
                <Link to={data.path} onClick={toggleOpen}>{data.name}</Link>
              </ListItem>
            ))}
          </List>
        </Drawer>
      </Container>
    </Box>
  );
}

export default Header;
