export interface Message {
  message: string;
}

export interface Tea {
  name: string;
  cost: number;
  price: number;
  description: string;
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

export interface User {
  id: number;
  username: string;
  password: string;
  firstName: string;
  lastName: string;
  token?: string;
}
