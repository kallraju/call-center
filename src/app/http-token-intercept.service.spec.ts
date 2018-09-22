import { TestBed, inject } from '@angular/core/testing';

import { HttpTokenInterceptService } from './http-token-intercept.service';

describe('HttpTokenInterceptService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HttpTokenInterceptService]
    });
  });

  it('should be created', inject([HttpTokenInterceptService], (service: HttpTokenInterceptService) => {
    expect(service).toBeTruthy();
  }));
});
