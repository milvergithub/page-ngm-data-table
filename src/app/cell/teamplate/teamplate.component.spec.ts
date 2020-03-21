import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamplateComponent } from './teamplate.component';

describe('TeamplateComponent', () => {
  let component: TeamplateComponent;
  let fixture: ComponentFixture<TeamplateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeamplateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
