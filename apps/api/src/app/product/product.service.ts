import { Injectable, Param } from '@nestjs/common';
import { Tea } from '@tea/api-interfaces';
import { Observable, Subject } from 'rxjs';

@Injectable()
export class ProductService {
    inventory: Array<Tea>;

    constructor() {
        this.inventory = [
            {
                name: 'Vanilla',
                cost: 2.50,
                price: 7.5,
                id: 100,
                orderQuantity: 0,
                image: 'assets/teas/default-tea-container-image.png'
            },
            {
                name: 'Apricot',
                cost: 2.50,
                price: 7.5,
                id: 101,
                orderQuantity: 0,
                image: 'assets/teas/default-tea-container-image.png'

            },
            {
                name: 'Plains',
                cost: 2.50,
                price: 7.5,
                id: 102,
                orderQuantity: 0,
                image: 'assets/teas/default-tea-container-image.png'

            },
            {
                name: 'English Breakfast',
                cost: 2.50,
                price: 7.5,
                id: 103,
                orderQuantity: 0,
                image: 'assets/teas/default-tea-container-image.png'
            },
            {
                name: 'Vanilla Green',
                cost: 2.50,
                price: 7.5,
                id: 104,
                orderQuantity: 0,
                image: 'assets/teas/default-tea-container-image.png'

            },
            {
                name: 'White Cloud',
                cost: 2.50,
                price: 7.5,
                id: 105,
                orderQuantity: 0,
                image: 'assets/teas/default-tea-container-image.png'
            },
        ];
    }

    getInventory(): Array<Tea> {
        return this.inventory;
    }

    getProduct(@Param('id') id: number): Tea[] {
        return this.inventory.filter((tea: Tea) => id === tea.id);
    }
}