import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoWarehouseBillComponent } from './info-warehouse-bill.component';

describe('InfoWarehouseBillComponent', () => {
  let component: InfoWarehouseBillComponent;
  let fixture: ComponentFixture<InfoWarehouseBillComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfoWarehouseBillComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoWarehouseBillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
