import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';

import { ProductModule } from './product/product.module';
import { ProductController } from './product/product.controller';
import { ProductService } from './product/product.service';

import { SubscriptionModule } from './subscription/subscription.module';
import { SubscriptionController } from './subscription/subscription.controller';
import { SubscriptionService } from './subscription/subscription.service';


@Module({
  imports: [
    ProductModule,
    SubscriptionModule
  ],
  controllers: [
    AppController,
    ProductController,
    SubscriptionController
  ],
  providers: [
    AppService,
    ProductService,
    SubscriptionService
  ]
})
export class AppModule { }
