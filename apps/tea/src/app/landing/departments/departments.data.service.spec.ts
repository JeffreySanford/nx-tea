import { Test, TestingModule } from '@nestjs/testing';
import { DepartmentsDataService } from './departments.data.service';

describe('DataService', () => {
  let service: DepartmentsDataService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DepartmentsDataService],
    }).compile();

    service = module.get<DepartmentsDataService>(DepartmentsDataService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
