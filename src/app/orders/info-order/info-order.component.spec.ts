import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoOrderComponent } from './info-order.component';

describe('InfoOrderComponent', () => {
  let component: InfoOrderComponent;
  let fixture: ComponentFixture<InfoOrderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfoOrderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
