import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';

import { ProductModule } from './product/product.module'
import { SubscriptionModule } from './subscription/subscription.module';

@Module({
  imports: [ProductModule, SubscriptionModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
