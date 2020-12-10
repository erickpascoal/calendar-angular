import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HandleCalendarComponent } from './handle-calendar.component';

describe('HandleCalendarComponent', () => {
  let component: HandleCalendarComponent;
  let fixture: ComponentFixture<HandleCalendarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HandleCalendarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HandleCalendarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
