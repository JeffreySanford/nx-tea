import { Injectable } from '@angular/core';
import { SubscriptionModel } from '../models/subscription';

@Injectable({
  providedIn: 'root'
})

export class SquareService {

  subscriptions: any;
  client: any;
  
  constructor() {
    // const client = new Client({
    //   timeout:3000,
    //   environment: Environment.Production, // `Environment.Sandbox` to access sandbox resources
    //   accessToken: process.env.SQUARE_ACCESS_TOKEN,
    // })

    // this.client = client;
   }

  /**
   * GET /v2/subscriptions/{subscription_id}
   */
  getSubscription (userId: number): any {
    console.log('Subscription service fired with UID: ' + userId);

    // try {
    //   const response = this.client.subscriptionsApi.retrieveSubscription('8193148c-9586-11e6-99f9-28cfe92138cf');
    
    //   console.log(response);
    //   debugger
    //   return response;
    // } catch(error) {
    //   console.log(error);
    // }
  }

  public createSubscription(subscription: SubscriptionModel): any {
    // if the title is already in use by another post
    // const titleExists: boolean = this.subscriptions.some(
    //   (item: SubscriptionModel) => item.id === subscription.id,
    // );
    // if (titleExists) {
    //   throw new UnprocessableEntityException('Post title already exists.');
    // }
  
    // find the next id for a new blog post
    // const maxId: number = Math.max(...this.subscriptions.map((post) => post.id), 0);
    // const id: number = maxId + 1;
  
    // const subscriptions: SubscriptionModel = {
    //   ...subscription,
    //   id,
    // };
  
    // this.subscriptions.push(subscriptions);
  
    // return this.subscriptions;
  }
}

//   createSubscription () {

//     try {
//         const response = await client.subscriptionsApi.createSubscription({
//           idempotencyKey: '8193148c-9586-11e6-99f9-28cfe92138cf',
//           locationId: 'S8GWD5R9QB376',
//           planId: '6JHXF3B2CW3YKHDV4XEM674H',
//           customerId: 'CHFGVKYY8RSV93M5KCYTG4PN0G',
//           startDate: '2021-10-20',
//           taxPercentage: '5',
//           priceOverrideMoney: {
//             amount: 100,
//             currency: 'USD'
//           },
//           cardId: 'ccof:qy5x8hHGYsgLrp4Q4GB',
//           timezone: 'America/Los_Angeles',
//           source: {
//             name: 'My App'
//           }
//         });
      
//         console.log(response.result);
//       } catch(error) {
//         console.log(error);
//       }

// }
