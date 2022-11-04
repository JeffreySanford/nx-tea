import { TestBed } from '@angular/core/testing';

import { ReadonlyInterceptor } from './readonly.interceptor';

describe('ReadonlyInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      ReadonlyInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: ReadonlyInterceptor = TestBed.inject(ReadonlyInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
