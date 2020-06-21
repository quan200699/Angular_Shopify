import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateWarehouseBillComponent } from './create-warehouse-bill.component';

describe('CreateWarehouseBillComponent', () => {
  let component: CreateWarehouseBillComponent;
  let fixture: ComponentFixture<CreateWarehouseBillComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateWarehouseBillComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateWarehouseBillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
