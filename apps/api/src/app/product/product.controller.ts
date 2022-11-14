import { Controller, Get, Param } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Tea } from '@tea/api-interfaces';
import { ProductService } from './product.service';
@Controller('product')
export class ProductController {
    productService: ProductService;

    constructor(productService: ProductService, private mongoose: MongooseModule) {
        this.productService = productService
    }
    @Get('tea')
    async getInventory() {
    
        return this.productService.getInventory();
    }

    @Get('tea:id')
    getCourse(@Param('id') id: string): Tea[] {
        const productId = Number.parseInt(id.slice(1, id.length));

        return this.productService.getProduct(productId);
    }
}
