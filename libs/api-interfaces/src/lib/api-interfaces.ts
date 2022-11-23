export interface Message {
  message: string;
}

export interface Tea {
  name: string;
  cost: number;
  price: number;
  id: number;
  orderQuantity: number;
  image: string;
}

export interface Department {
  department: string;
  studentcount: number;
}

export interface Cart extends Tea {
  
}

export interface Products {
  teas?: Array<Tea>
}
