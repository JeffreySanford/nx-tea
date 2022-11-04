import { Test, TestingModule } from '@nestjs/testing';
import { CustomerSubscriptionController } from './customer-subscription.controller';

describe('CustomerSubscriptionController', () => {
  let controller: CustomerSubscriptionController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CustomerSubscriptionController],
    }).compile();

    controller = module.get<CustomerSubscriptionController>(
      CustomerSubscriptionController
    );
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
