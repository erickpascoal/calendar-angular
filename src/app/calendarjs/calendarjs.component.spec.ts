import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalendarjsComponent } from './calendarjs.component';

describe('CalendarjsComponent', () => {
  let component: CalendarjsComponent;
  let fixture: ComponentFixture<CalendarjsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalendarjsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalendarjsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
