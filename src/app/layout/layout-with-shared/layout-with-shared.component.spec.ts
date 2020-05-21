import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutWithSharedComponent } from './layout-with-shared.component';

describe('LayoutWithSharedComponent', () => {
  let component: LayoutWithSharedComponent;
  let fixture: ComponentFixture<LayoutWithSharedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LayoutWithSharedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LayoutWithSharedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
