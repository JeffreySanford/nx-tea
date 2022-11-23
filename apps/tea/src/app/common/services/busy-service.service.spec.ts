import { TestBed } from '@angular/core/testing';

import { BusyServiceService } from './busy.service';

describe('BusyServiceService', () => {
  let service: BusyServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BusyServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
