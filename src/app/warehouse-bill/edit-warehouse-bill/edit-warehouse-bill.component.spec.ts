import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditWarehouseBillComponent } from './edit-warehouse-bill.component';

describe('EditWarehouseBillComponent', () => {
  let component: EditWarehouseBillComponent;
  let fixture: ComponentFixture<EditWarehouseBillComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditWarehouseBillComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditWarehouseBillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
