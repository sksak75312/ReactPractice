interface IMenu {
  name: string;
  description: string;
  price: number;
  count: number;
}

interface IDrinkMenu {
  id?: number;
  name: string;
  description: string;
  price: number;
}

interface IShoppingCart extends IDrinkMenu{
  quantity: number;
}

interface IOrder {
  serialName: string;
  createdTime: string;
  remark: string;
  order: IShoppingCart[];
  totalPrice: number;
}