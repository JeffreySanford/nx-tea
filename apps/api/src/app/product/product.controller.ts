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
    getInventory(): Array<Tea> {
        console.log('get inventory')
        return this.productService.getInventory();
    }

    @Get('tea:id')
    getCourse(@Param('id') id: number): Tea[] {
        console.log('get tea' + id)
        return this.productService.getProduct(id);
    }
}
