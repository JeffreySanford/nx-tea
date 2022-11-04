import { Controller, Get } from '@nestjs/common';
import { CustomerSubscriptionService } from './customer-subscription.service';

@Controller('customer-subscription')
export class CustomerSubscriptionController {

    constructor(private service: CustomerSubscriptionService) {

    }

    @Get('subscription')
    getSubscription() {
        console.log('trigger subscription controller');

        // const subscription: CreateSubscriptionRequest = {
        //     idempotencyKey: '8193148c-9586-11e6-99f9-28cfe92138cf',
        //     locationId: 'S8GWD5R9QB376',
        //     planId: '6JHXF3B2CW3YKHDV4XEM674H',
        //     customerId: 'CHFGVKYY8RSV93M5KCYTG4PN0G',
        //     startDate: '2021-10-20',
        //     taxPercentage: '5',
        //     priceOverrideMoney: {
        //         amount: BigInt(100),
        //         currency: 'USD'
        //     },
        //     cardId: 'ccof:qy5x8hHGYsgLrp4Q4GB',
        //     timezone: 'America/Los_Angeles',
        //     source: {
        //         name: 'Broken Leaf - A Stutsman Tea Company'
        //     }
        // }

        // return this.service.getSubscription(subscription);
    }
}
