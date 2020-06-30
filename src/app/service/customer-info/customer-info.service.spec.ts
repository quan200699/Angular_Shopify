import { TestBed } from '@angular/core/testing';

import { CustomerInfoService } from './customer-info.service';

describe('CustomerInfoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CustomerInfoService = TestBed.get(CustomerInfoService);
    expect(service).toBeTruthy();
  });
});
