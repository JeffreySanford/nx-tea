import { Injectable } from '@nestjs/common';

@Injectable()
export class CustomerSubscriptionService {
    client: any;
    subscriptions: any;

    constructor() {
        // this.client = client;
    }

    // getSubscription(subscription: CreateSubscriptionRequest) {
    //     return  this.client.subscriptionsApi.retrieveSubscription(subscription);
    // }

    // createSubscription(subscription: CreateSubscriptionRequest) {

    //     return this.subscriptionAPI.createSubscription(subscription);
    // }
}
