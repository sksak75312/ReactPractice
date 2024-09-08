import {
  Box,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Paper,
  Typography,
} from '@mui/material';
import { Fragment, ReactNode } from 'react';

function DrinkOrder({ children, orders }: { children: ReactNode; orders: IOrder[] }) {
  return (
    <>
      {orders.length > 0 ? (
        <Box p={3}>
          <Paper elevation={3}>
            <Typography p={2} variant="h5" component="h3">
              訂單
            </Typography>
            <TableContainer>
              <Table sx={{ minWidth: 850 }} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell align="center">訂單編號</TableCell>
                    <TableCell align="center">訂單時間</TableCell>
                    <TableCell align="center">備註</TableCell>
                    <TableCell align="center">品項</TableCell>
                    <TableCell align="center">數量</TableCell>
                    <TableCell align="center">總計</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {orders.map((item) => (
                    <TableRow
                      key={item.serialName}
                      sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                      <TableCell align="center" component="th" scope="row">
                        {item.serialName}
                      </TableCell>
                      <TableCell align="center">{item.createdTime}</TableCell>
                      <TableCell align="center">{item.remark}</TableCell>
                      <TableCell align="center">
                        {item.order.map((data, index, currentAry) => (
                          <Fragment key={data.id}>
                            <Typography>{data.name}</Typography> 
                            {currentAry.length - 1 !== index && <br />}
                          </Fragment>
                        ))}
                      </TableCell>
                      <TableCell align="center">
                        {item.order.map((data, index, currentAry) => (
                          <Fragment key={data.id}>
                            <Typography>{data.quantity}</Typography>
                            {currentAry.length - 1 !== index && <br />}
                          </Fragment>
                        ))}
                      </TableCell>
                      <TableCell align="center">{item.totalPrice}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Paper>
        </Box>
      ) : (
        children
      )}
    </>
    // <h1>{children}</h1>
  );
}

export default DrinkOrder;
