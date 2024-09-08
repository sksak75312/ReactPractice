import { useState } from 'react';
import dayjs from 'dayjs';
import { Box, Container, Grid, List, Paper } from '@mui/material';

import DrinkMenu from '../../components/DrinkMenu';
import DrinkTable from '../../components/DrinkTable';
import DrinkOrder from '../../components/DrinkOrder';
import NoneShop from '../../components/NoneShop/NoneShop';

import { drinkMenu } from '../../data/drinkMenuData';

function DrinkSystem() {
  const [shoppingCart, setShoppingCart] = useState<IShoppingCart[]>([]);
  const [orders, setOrders] = useState<IOrder[]>([]);

  // 新增購物車品項
  const addShoppingCart = (data: IDrinkMenu) => {
    setShoppingCart((pre) => {
      const findIndex = pre.findIndex((item) => item.name === data.name);
      if (findIndex >= 0) {
        const newData = pre[findIndex];
        newData.quantity += 1;
        const tempData = [...pre];
        tempData.splice(findIndex, 1, newData)
        return tempData;
      } else {
        const newData = {
          ...data,
          quantity: 1,
        };
        return [...pre.filter((item) => item.name !== data.name), newData];
      }

    });
  };

  // 刪除購物車品項
  const deleteShoppingCart = (data: IDrinkMenu) => {
    setShoppingCart((pre) => {
      return [...pre.filter((item) => item.name !== data.name)];
    });
  };

  // 新增訂單
  const addOrder = (remark: string) => {
    const totalPrice = shoppingCart.reduce((acc, cur) => (cur.price * cur.quantity) + acc, 0)
    const newOrder = {
      serialName: crypto.randomUUID(),
      createdTime: `${dayjs().format()}`,
      remark: remark || '無',
      order: shoppingCart,
      totalPrice
    };
    setOrders((pre) => {
      setShoppingCart([]);
      return [...pre, newOrder];
    });
  };
  return (
    <Box component="section" sx={{ marginTop: '2rem' }}>
      <Container>
        <Grid container spacing={6}>
          <Grid item xs={12} md={4}>
            <Paper elevation={3}>
              <List>
                {drinkMenu.map((data) => (
                  <DrinkMenu
                    key={data.id}
                    {...data}
                    onAddShoppingCart={() => addShoppingCart(data)}
                  />
                ))}
              </List>
            </Paper>
          </Grid>
          <Grid item xs={12} md={8}>
            <DrinkTable
              shoppingCart={shoppingCart}
              onDeleteShoppingCart={deleteShoppingCart}
              onAddOrder={addOrder}
            >
              <NoneShop>暫時無選購商品</NoneShop>
            </DrinkTable>
          </Grid>
        </Grid>
        <hr style={{marginTop: '1rem'}}/>
        <DrinkOrder orders={orders}>
          <NoneShop>尚未建立任何新訂單</NoneShop>
        </DrinkOrder>
      </Container>
    </Box>
  );
}

export default DrinkSystem;
