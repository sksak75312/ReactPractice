import {
  TableHead,
  TableRow,
  TableCell
} from '@mui/material'

const headItem: string[] = ['品項', '描述', '價格', '庫存', '操作']

function MenuTableHead() {
  return (
    <TableHead>
      <TableRow>
      {
        headItem.map(item => (
          <TableCell key={item} align="center" sx={{fontSize: '1.75rem', fontWeight: 'bold'}}>{item}</TableCell>
        ))
      }
      </TableRow>
    </TableHead>
  )
}

export default MenuTableHead;