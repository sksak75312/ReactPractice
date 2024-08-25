import {
  Button,
  TableBody,
  TableRow,
  TableCell,
  Typography,
  Stack,
  TextField,
} from '@mui/material';

function MenuTableBody({
  menuData,
  editorIndex,
  onEditor,
  onEditorData,
  onSaveData,
  onDeleteData,
  onNumber,
}: {
  menuData: IMenu[];
  editorIndex: EditingIndex;
  onEditor: Function;
  onEditorData: Function;
  onSaveData: Function;
  onDeleteData: Function;
  onNumber: Function;
}) {
  return (
    <TableBody>
      {menuData.map((item: IMenu, i: number) =>
        editorIndex === i ? (
          <TableRow key={item.name}>
            <TableCell align="center">
              <TextField
                name="name"
                size="small"
                defaultValue={item.name}
                onChange={(e) => onEditorData(e)}
              />
            </TableCell>
            <TableCell align="center">
              <TextField
                name="description"
                size="small"
                defaultValue={item.description}
                onChange={(e) => onEditorData(e)}
              />
            </TableCell>
            <TableCell align="center">
              <Stack direction="row" justifyContent="center" spacing={2}>
                <Button size="small" variant="contained" name="price" data-status="del" onClick={(e) => onNumber(e, item)}>
                  -
                </Button>
                <Typography variant="h6">{item.price}</Typography>
                <Button size="small" variant="contained" name="price" data-status="add" onClick={(e) => onNumber(e, item)}>
                  +
                </Button>
              </Stack>
            </TableCell>
            <TableCell align="center">
              <Stack direction="row" justifyContent="center" spacing={2}>
                <Button size="small" variant="contained" name="count" data-status="del" onClick={(e) => onNumber(e, item)}>
                  -
                </Button>
                <Typography variant="h6">{item.count}</Typography>
                <Button size="small" variant="contained" name="count" data-status="add" onClick={(e) => onNumber(e, item)}>
                  +
                </Button>
              </Stack>
            </TableCell>
            <TableCell align="center">
              <Button variant="contained" onClick={() => onSaveData(i)}>
                儲存
              </Button>
            </TableCell>
          </TableRow>
        ) : (
          <TableRow key={item.name}>
            <TableCell align="center">
              <Typography variant="h6">{item.name}</Typography>
            </TableCell>
            <TableCell align="center">
              <Typography variant="h6">{item.description}</Typography>
            </TableCell>
            <TableCell align="center">
              <Typography variant="h6">{item.price}</Typography>
            </TableCell>
            <TableCell align="center">
              <Typography variant="h6">{item.count}</Typography>
            </TableCell>
            <TableCell align="center">
              <Stack direction="row" justifyContent="center" spacing={2}>
                <Button variant="contained" onClick={() => onEditor(item, i)}>
                  編輯
                </Button>
                <Button variant="contained" onClick={() => onDeleteData(item)}>
                  刪除
                </Button>
              </Stack>
            </TableCell>
          </TableRow>
        )
      )}
    </TableBody>
  );
}

export default MenuTableBody;
