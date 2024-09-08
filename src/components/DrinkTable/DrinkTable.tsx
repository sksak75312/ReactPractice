import { ChangeEvent, ReactNode, useState } from 'react';
import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  Button,
  Paper,
} from '@mui/material';

import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

const tableHead = ['操作', '品項', '描述', '數量', '單價', '小計'];

function DrinkTable({
  children,
  shoppingCart,
  onDeleteShoppingCart,
  onAddOrder,
}: {
  children: ReactNode;
  shoppingCart: IShoppingCart[];
  onDeleteShoppingCart: (data: IShoppingCart) => void;
  onAddOrder: (remark: string) => void;
}) {
  const [remark, setRemark] = useState('');

  const getTextAreaValue = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setRemark(e.target.value);
  };
  return (
    <>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              {tableHead.map((value, index) => (
                <TableCell align="center" key={index}>
                  {value}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {shoppingCart.map((data) => (
              <TableRow key={data.id}>
                <TableCell align="center">
                  <Button onClick={() => onDeleteShoppingCart(data)}>
                    <DeleteForeverIcon />
                  </Button>
                </TableCell>
                <TableCell align="center">{data.name}</TableCell>
                <TableCell align="center">{data.description}</TableCell>
                <TableCell align="center">{data.quantity}</TableCell>
                <TableCell align="center">{data.price}</TableCell>
                <TableCell align="center">{data.price * data.quantity}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      {shoppingCart.length === 0 ? (
        children
      ) : (
        <Box
          display="flex"
          flexDirection="column"
          alignItems="end"
          justifyContent="end"
          gap={2}
          sx={{ text: 'end' }}
        >
          <Typography variant="h5" component="h5">
            總計: $ {shoppingCart.reduce((acc, cur) => cur.price * cur.quantity + acc, 0)}
          </Typography>
          <textarea
            value={remark}
            onChange={getTextAreaValue}
            style={{ width: '100%', height: '100px', resize: 'none' }}
            placeholder="訂單備註"
          ></textarea>
          <Button
            variant="contained"
            size="large"
            onClick={() => {
              onAddOrder(remark);
              setRemark('')
            }}
          >
            送出訂單
          </Button>
        </Box>
      )}
    </>
  );
}

export default DrinkTable;
