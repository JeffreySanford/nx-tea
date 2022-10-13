import { TestBed } from '@angular/core/testing';

import { SquareService } from './square.service';

describe('SquareService', () => {
  let service: SquareService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SquareService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
