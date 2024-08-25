// 引入 mui 元件
import { Container, Typography, Table, TableContainer, Paper } from '@mui/material';

import { ChangeEvent, useState } from 'react';

// 引入自定義元件
import MenuTableHead from '../MenuTableHead';
import MenuTableBody from '../MenuTableBody';
// 引入初始化資料
import { initialMenuData } from '../../data/initialMenuData';

function TableFormat() {
  const [menuData, setMenuData] = useState<IMenu[]>(initialMenuData);
  const [currentEditorData, setCurrentEditorData] = useState<IMenu>({
    name: '',
    description: '',
    price: 0,
    count: 0,
  });
  const [curEditorIndex, setCurEditorIndex] = useState<EditingIndex>(null);

  const editorItemHandler = (item: IMenu, index: number): void => {
    setCurrentEditorData(item);
    setCurEditorIndex(index);
  };

  const editorDataHandler = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setCurrentEditorData({
      ...currentEditorData,
      [name]: value,
    });
  };

  const editorNumberHandler = (e: any, data: IMenu) => {
    const { name }: { name: Extract<keyof IMenu, 'price' | 'count'> } = e.target;
    const { status } = e.target.dataset;
    switch (status) {
      case 'add':
        data[name]++;
        break;
      case 'del':
        data[name] === 0 ? 0 : data[name]--;
        break;
    }
    setCurrentEditorData({
      ...currentEditorData,
      [name]: data[name]
    })
    setMenuData((preData) => preData.filter((item) => (item === data ? data : item)));
  };

  const saveDataHandler = (i: number) => {
    const filterData = menuData.filter((_, i) => i !== curEditorIndex);
    filterData.splice(i, 0, currentEditorData);
    setMenuData(filterData);
    setCurEditorIndex(null);
  };

  const deleteDataHandler = (data: IMenu) => {
    setMenuData((preData) => preData.filter((item) => item !== data));
  };

  return (
    <Container style={{paddingBottom: '1rem'}}>
      <Typography variant="h2" align="center" sx={{ margin: '1.125rem 0' }}>
        餐點系統
      </Typography>
      <Paper elevation={6}>
        <TableContainer>
          <Table sx={{ minWidth: 750 }} aria-label="simple table">
            <MenuTableHead />
            <MenuTableBody
              menuData={menuData}
              editorIndex={curEditorIndex}
              onEditor={editorItemHandler}
              onEditorData={editorDataHandler}
              onSaveData={saveDataHandler}
              onDeleteData={deleteDataHandler}
              onNumber={editorNumberHandler}
            />
          </Table>
        </TableContainer>
      </Paper>
    </Container>
  );
}

export default TableFormat;
