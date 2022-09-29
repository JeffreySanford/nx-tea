import { Controller, Get, Param } from '@nestjs/common';
import { Tea } from '@tea/api-interfaces';
import { ProductService } from './product.service';
@Controller('product')
export class ProductController {
    productService: ProductService;

    constructor(productService: ProductService) {
        this.productService = productService;
    }
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
    }
}
