import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Line } from './line';

@Component({
  selector: 'app-holy-calendar',
  templateUrl: './holy-calendar.component.html',
  styleUrls: ['./holy-calendar.component.scss']
})
export class HolyCalendarComponent implements OnInit {

  constructor(
    private formBuilder: FormBuilder
  ) { }

  formGroup: FormGroup;

  today = new Date();
  currentMonth = this.today.getMonth();
  currentYear = this.today.getFullYear();
  months = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];
  lines: Line[] = [];


  ngOnInit(): void {
    this.buildForm();
    this.showCalendar(this.currentMonth, this.currentYear);
  }

  buildForm() {
    this.formGroup = this.formBuilder.group({
      selectMounth: [this.currentMonth],
      selectYear: [this.currentYear],
    });
  }

  previous() {
    this.currentYear = (this.currentMonth === 0) ? this.currentYear - 1 : this.currentYear;
    this.currentMonth = (this.currentMonth === 0) ? 11 : this.currentMonth - 1;
    this.showCalendar(this.currentMonth, this.currentYear);
  }

  next() {
    this.currentYear = (this.currentMonth === 11) ? this.currentYear + 1 : this.currentYear;
    this.currentMonth = (this.currentMonth + 1) % 12;
    this.showCalendar(this.currentMonth, this.currentYear);
  }

  jump() {
    this.currentMonth = this.formGroup.get('selectMounth').value;
    this.currentYear = this.formGroup.get('selectYear').value;
    this.showCalendar(this.currentMonth, this.currentYear);
  }

  showCalendar(month: number, year: number) {
    this.formGroup.get('selectMounth').setValue(month)
    this.formGroup.get('selectYear').setValue(year)
    this.lines = [];

    let firstDay = (new Date(year, month)).getDay();

    let date = 1;
    for (let i = 0; i < 6; i++) {
      this.lines.push(new Line());

      for (let j = 0; j < 7; j++) {

        if (i === 0 && j < firstDay) {
          this.lines[i].days.push(null);
        } else if (date > this.daysInMonth(month, year)) {
          break;
        } else {
          this.lines[i].days.push(date);
          date++;
        }

      }
    }

  }

  isToday(day: number) {
    if (day === this.today.getDate() && this.currentYear === this.today.getFullYear() && this.currentMonth === this.today.getMonth()) {
      return true;
    }
    return false;
  }

  daysInMonth(mounth: number, year: number) {
    return 32 - new Date(year, mounth, 32).getDate();
  }
}
