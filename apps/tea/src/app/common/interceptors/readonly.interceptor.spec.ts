import { TestBed } from '@angular/core/testing';
import { ReadOnlyInterceptor } from './readonly.interceptor';

describe('ReadonlyInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      ReadOnlyInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: ReadOnlyInterceptor = TestBed.inject(ReadOnlyInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
