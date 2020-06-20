import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListWarehouseComponent } from './list-warehouse.component';

describe('ListWarehouseComponent', () => {
  let component: ListWarehouseComponent;
  let fixture: ComponentFixture<ListWarehouseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListWarehouseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListWarehouseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
