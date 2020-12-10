import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-holy-calendar',
  templateUrl: './holy-calendar.component.html',
  styleUrls: ['./holy-calendar.component.scss']
})
export class HolyCalendarComponent implements OnInit {

  constructor() { }

  today = new Date();
  currentMonth = this.today.getMonth();
  currentYear = this.today.getFullYear();


  months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

  ngOnInit(): void {
    this.showCalendar(this.currentMonth, this.currentYear);
  }


  next() {
    this.currentYear = (this.currentMonth === 11) ? this.currentYear + 1 : this.currentYear;
    this.currentMonth = (this.currentMonth + 1) % 12;
    this.showCalendar(this.currentMonth, this.currentYear);
  }

  previous() {
    this.currentYear = (this.currentMonth === 0) ? this.currentYear - 1 : this.currentYear;
    this.currentMonth = (this.currentMonth === 0) ? 11 : this.currentMonth - 1;
    this.showCalendar(this.currentMonth, this.currentYear);
  }

  jump() {
    this.currentYear = parseInt((<any>document.getElementById("year")).value);
    this.currentMonth = parseInt((<any>document.getElementById("month")).value);
    this.showCalendar(this.currentMonth, this.currentYear);
  }

  showCalendar(month, year) {

    let firstDay = (new Date(year, month)).getDay();

    // clearing all previous cells
    document.getElementById("calendar-body").innerHTML = "";

    // filing data about month and in the page via DOM.
    document.getElementById('monthAndYear').innerHTML = this.months[month] + " " + year;
    (<any>document.getElementById("year")).value = year;
    (<any>document.getElementById("month")).value = month;

    // creating all cells
    let date = 1;
    for (let i = 0; i < 6; i++) {
      // creates a table row
      let row = document.createElement("tr");

      //creating individual cells, filing them up with data.
      for (let j = 0; j < 7; j++) {
        if (i === 0 && j < firstDay) {
          var cell = document.createElement("td");
          var cellText = document.createTextNode("");
          cell.appendChild(cellText);
          row.appendChild(cell);
        }
        else if (date > this.daysInMonth(month, year)) {
          break;
        }

        else {
          const cell = document.createElement("td");
          const cellText = document.createTextNode(date.toString());
          if (date === this.today.getDate() && year === this.today.getFullYear() && month === this.today.getMonth()) {
            cell.classList.add("bg-info");
          } // color today's date
          cell.appendChild(cellText);
          row.appendChild(cell);
          date++;
        }


      }

      document.getElementById("calendar-body").appendChild(row); // appending each row into calendar body.
    }

  }


  // check how many days in a month code from https://dzone.com/articles/determining-number-days-month
  daysInMonth(iMonth, iYear) {
    return 32 - new Date(iYear, iMonth, 32).getDate();
  }
}
