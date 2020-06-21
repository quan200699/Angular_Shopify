import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListWarehouseBillComponent } from './list-warehouse-bill.component';

describe('ListWarehouseBillComponent', () => {
  let component: ListWarehouseBillComponent;
  let fixture: ComponentFixture<ListWarehouseBillComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListWarehouseBillComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListWarehouseBillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
