import { TestBed, inject } from '@angular/core/testing';

import { MisService } from './mis.service';

describe('MisService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MisService]
    });
  });

  it('should be created', inject([MisService], (service: MisService) => {
    expect(service).toBeTruthy();
  }));
});
