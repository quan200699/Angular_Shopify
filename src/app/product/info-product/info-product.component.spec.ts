import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoProductComponent } from './info-product.component';

describe('InfoProductComponent', () => {
  let component: InfoProductComponent;
  let fixture: ComponentFixture<InfoProductComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfoProductComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
