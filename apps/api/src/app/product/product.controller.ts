import { Controller, Get, Param } from '@nestjs/common';
import { Tea } from '@tea/api-interfaces';
import { ProductService } from './product.service';
@Controller('product')
export class ProductController {
    productService: ProductService;

    constructor(productService: ProductService) {
        this.productService = productService;
    }
<<<<<<< HEAD
    @Get('tea')
    getInventory(): Array<any> {
        console.log('get inventory');
        // CReate a subject here that gets passed back
        const inventory = this.productService.getInventory();
        // const inventory = [{}]
        console.log('inventory ' + inventory);
        console.log(inventory);

        return inventory;
    }

    @Get('tea:id')
    getCourse(@Param('id') id: string): Tea[] {
        const productId = Number.parseInt(id.slice(1, id.length));

        return this.productService.getProduct(productId);
=======

    @Get('tea')
    getInventory(): Array<Tea> {
        console.log('get inventory')
        return this.productService.getInventory();
    }

    @Get('tea:id')
    getCourse(@Param('id') id: number): Tea[] {
        console.log('get tea' + id)
        return this.productService.getProduct(id);
>>>>>>> b8feb996308d2b0434c8e176df2c60b65b3600ec
    }
}
