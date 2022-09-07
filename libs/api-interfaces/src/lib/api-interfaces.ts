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
  image: string;
}

export interface Cart extends Tea {
  
}

export interface Products {
  teas?: Array<Tea>
}
