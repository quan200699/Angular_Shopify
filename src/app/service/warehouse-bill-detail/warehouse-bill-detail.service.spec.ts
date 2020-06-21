import { TestBed } from '@angular/core/testing';

import { WarehouseBillDetailService } from './warehouse-bill-detail.service';

describe('WarehouseBillDetailService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: WarehouseBillDetailService = TestBed.get(WarehouseBillDetailService);
    expect(service).toBeTruthy();
  });
});
