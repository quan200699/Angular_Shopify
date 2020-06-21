import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditWarehouseBillDetailComponent } from './edit-warehouse-bill-detail.component';

describe('EditWarehouseBillDetailComponent', () => {
  let component: EditWarehouseBillDetailComponent;
  let fixture: ComponentFixture<EditWarehouseBillDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditWarehouseBillDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditWarehouseBillDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
