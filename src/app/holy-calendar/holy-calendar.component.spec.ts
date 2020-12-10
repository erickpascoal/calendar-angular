import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HolyCalendarComponent } from './holy-calendar.component';

describe('HolyCalendarComponent', () => {
  let component: HolyCalendarComponent;
  let fixture: ComponentFixture<HolyCalendarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HolyCalendarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HolyCalendarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
