import { TestBed } from '@angular/core/testing';

import { ApiInterceptorService } from "./ApiInterceptorService";

describe('ApiinterceptorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ApiInterceptorService = TestBed.get(ApiInterceptorService);
    expect(service).toBeTruthy();
  });
});
