import { Module } from '@nestjs/common';
import { ProductService } from './product.service';
import { ProductController } from './product.controller';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [  MongooseModule.forRoot('mongodb://teaadmin:p4ssw0rd@localhost', {
    dbName: 'tea',
  })
  ],
  providers: [ProductService, MongooseModule],
  controllers: [ProductController]
})
export class ProductModule { }
