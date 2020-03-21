import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamplateExpandComponent } from './teamplate-expand.component';

describe('TeamplateExpandComponent', () => {
  let component: TeamplateExpandComponent;
  let fixture: ComponentFixture<TeamplateExpandComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeamplateExpandComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamplateExpandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
