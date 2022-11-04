import { Test, TestingModule } from '@nestjs/testing';
import { CustomerSubscriptionService } from './customer-subscription.service';

describe('CustomerSubscriptionService', () => {
  let service: CustomerSubscriptionService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CustomerSubscriptionService],
    }).compile();

    service = module.get<CustomerSubscriptionService>(
      CustomerSubscriptionService
    );
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
