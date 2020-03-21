import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomIconExpandedComponent } from './custom-icon-expanded.component';

describe('CustomIconExpandedComponent', () => {
  let component: CustomIconExpandedComponent;
  let fixture: ComponentFixture<CustomIconExpandedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomIconExpandedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomIconExpandedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
