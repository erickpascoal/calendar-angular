import { Component, OnInit } from '@angular/core';
import { CalendarOptions, DateSelectArg, EventClickArg, EventApi } from '@fullcalendar/angular';
import { INITIAL_EVENTS, createEventId } from './event-utils';

@Component({
  selector: 'app-calendarjs',
  templateUrl: './calendarjs.component.html',
  styleUrls: ['./calendarjs.component.scss']
})
export class CalendarjsComponent implements OnInit {

  currentEvents: EventApi[] = [];

  events: any[] = [];

  calendarVisible = true;
  calendarOptions: CalendarOptions = {
    headerToolbar: {
      left: 'prev,next today',
      center: 'title',
      right: 'dayGridMonth,timeGridWeek,timeGridDay,listWeek'
    },
    initialView: 'dayGridMonth',
    // initialEvents: INITIAL_EVENTS, // alternatively, use the `events` setting to fetch from a feed
    weekends: true,
    editable: true,
    selectable: true,
    selectMirror: true,
    dayMaxEvents: true,
    select: this.handleDateSelect.bind(this),
    eventClick: this.handleEventClick.bind(this),
    eventsSet: this.handleEvents.bind(this),
    events: this.events
    /* you can update a remote database when these fire:
    eventAdd:
    eventChange:
    eventRemove:
    */
  };

  ngOnInit(): void {
    this.loadingEvents();
  }


  loadingEvents() {
    setTimeout(() => {
      console.log('baixou');

      this.events = [
        { title: 'event 1', start: '2020-12-11T08:30:00-03:00', end: '2020-12-11T09:30:00-03:00' },
        { title: 'event 2', start: '2020-12-12T08:30:00-03:00', end: '2020-12-12T09:30:00-03:00' }
      ]

      this.calendarOptions.events = this.events;
    }, 3000);
  }

  handleCalendarToggle() {
    this.calendarVisible = !this.calendarVisible;
  }

  handleWeekendsToggle() {
    const { calendarOptions } = this;
    calendarOptions.weekends = !calendarOptions.weekends;
  }

  handleDateSelect(selectInfo: DateSelectArg) {
    const title = prompt('Digite o nome do novo envento');
    const calendarApi = selectInfo.view.calendar;

    calendarApi.unselect(); // clear date selection

    if (title) {

      calendarApi.addEvent({
        id: createEventId(),
        title,
        start: selectInfo.startStr,
        end: selectInfo.endStr,
        allDay: selectInfo.allDay
      });
    }
  }

  handleEventClick(clickInfo: EventClickArg) {
    if (confirm(`Deseja mesmo deletar '${clickInfo.event.title}'`)) {
      clickInfo.event.remove();
    }
  }

  handleEvents(events: EventApi[]) {
    this.currentEvents = events;

    console.log('this.currentEvents', this.currentEvents);

  }

}
