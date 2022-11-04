import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';

import { ProductModule } from './product/product.module';
import { CustomerSubscriptionsModule } from './customer-subscription/customer-subscriptions.module';


@Module({
  imports: [
    ProductModule,
    CustomerSubscriptionsModule
  ],
  controllers: [
    AppController

  ],
  providers: [
    AppService
  ]
})
export class AppModule { }
