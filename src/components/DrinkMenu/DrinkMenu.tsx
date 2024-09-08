import { ListItem, ListItemButton, Stack, Typography } from '@mui/material';

function DrinkMenu({
  name,
  price,
  description,
  onAddShoppingCart,
}: {
  name: string;
  price: number;
  description: string;
  onAddShoppingCart: () => void;
}) {
  return (
    <ListItem disablePadding>
      <ListItemButton onClick={onAddShoppingCart}>
        <Stack direction="column" sx={{ width: '100%' }}>
          <Stack
            direction="row"
            sx={{
              justifyContent: 'space-between',
              alignItems: 'center',
              width: '100%',
              marginBottom: '0.5rem',
            }}
          >
            <Typography variant="h6" component="h3">
              {name}
            </Typography>
            <Typography component="span">$ {price}</Typography>
          </Stack>
          <Typography component="p">{description}</Typography>
        </Stack>
      </ListItemButton>
    </ListItem>
  );
}

export default DrinkMenu;
