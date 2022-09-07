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
      orderQuantity: 0,
      image: 'assets/teas/default-tea-container-image.png'
    },
    {
      name: 'Apricot Tea',
      cost: 2.50,
      price: 7.5,
      id: 101,
      orderQuantity: 0,
      image: 'assets/teas/default-tea-container-image.png'

    },
    {
      name: 'Plains Tea',
      cost: 2.50,
      price: 7.5,
      id: 102,
      orderQuantity: 0,
      image: 'assets/teas/default-tea-container-image.png'

    },
    {
      name: 'English Breakfast Tea',
      cost: 2.50,
      price: 7.5,
      id: 103,
      orderQuantity: 0,
      image: 'assets/teas/default-tea-container-image.png'
    },
    {
      name: 'Vanilla Green Tea',
      cost: 2.50,
      price: 7.5,
      id: 104,
      orderQuantity: 0,
      image: 'assets/teas/default-tea-container-image.png'

    },
    {
      name: 'White Cloud Tea',
      cost: 2.50,
      price: 7.5,
      id: 105,
      orderQuantity: 0,
      image: 'assets/teas/default-tea-container-image.png'

    },
  ];
  getData(): Message {
    return { message: 'Welcome to api!' };
  }

  getInventory(): Array<Tea> {
    return this.inventory;
  }
}
