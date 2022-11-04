import { Module } from '@nestjs/common';
import { CustomerSubscriptionController } from './customer-subscription.controller';
import { CustomerSubscriptionService } from './customer-subscription.service';

@Module({
    providers: [
        CustomerSubscriptionService
    ],
    controllers: [CustomerSubscriptionController]
})
export class CustomerSubscriptionsModule {}
