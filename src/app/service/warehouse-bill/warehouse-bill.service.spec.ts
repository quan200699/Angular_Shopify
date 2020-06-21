import { TestBed } from '@angular/core/testing';

import { WarehouseBillService } from './warehouse-bill.service';

describe('WarehouseBillService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: WarehouseBillService = TestBed.get(WarehouseBillService);
    expect(service).toBeTruthy();
  });
});
