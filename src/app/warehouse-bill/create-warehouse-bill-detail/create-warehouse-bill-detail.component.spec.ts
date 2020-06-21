import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateWarehouseBillDetailComponent } from './create-warehouse-bill-detail.component';

describe('CreateWarehouseBillDetailComponent', () => {
  let component: CreateWarehouseBillDetailComponent;
  let fixture: ComponentFixture<CreateWarehouseBillDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateWarehouseBillDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateWarehouseBillDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
