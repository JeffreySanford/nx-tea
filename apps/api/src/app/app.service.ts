import { Injectable } from '@nestjs/common';
import { Message, Tea } from '@tea/api-interfaces';

@Injectable()
export class AppService {
  inventory: Array<Tea> = [
    {
      name: 'Vanilla Tea',
      cost: 2.50,
      price: 7.5,
      id: 100,
      orderQuantity: 0
    },
    {
      name: 'Apricot Tea',
      cost: 2.50,
      price: 7.5,
      id: 101,
      orderQuantity: 0
    },
    {
      name: 'Plains Tea',
      cost: 2.50,
      price: 7.5,
      id: 102,
      orderQuantity: 0
    },
  ];
  getData(): Message {
    return { message: 'Welcome to api!' };
  }

  getInventory(): Array<Tea> {
    return this.inventory;
  }
}
