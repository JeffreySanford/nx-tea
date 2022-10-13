import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';

import { ProductModule } from './product/product.module';
import { SquareModule } from './square/square.module';

@Module({
  imports: [
    ProductModule,
    SquareModule
  ],
  controllers: [
    AppController

  ],
  providers: [
    AppService
  ]
})
export class AppModule { }
