export interface Message {
  message: string;
}

export interface Tea {
  name: string;
  cost: number;
  price: number;
  id: number;
  orderQuantity: number;
  instructions?: string;
}

export interface Products {
  teas?: Array<Tea>
}
