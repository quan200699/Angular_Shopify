import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoCategoryComponent } from './info-category.component';

describe('InfoCategoryComponent', () => {
  let component: InfoCategoryComponent;
  let fixture: ComponentFixture<InfoCategoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfoCategoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
