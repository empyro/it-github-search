import { Component, Input, OnChanges } from '@angular/core';
import Moment from 'moment';

@Component({
  selector: 'app-date',
  templateUrl: './date.component.html',
  styleUrls: ['./date.component.scss']
})
export class DateComponent implements OnChanges {
  @Input()
  date;

  private momentDate;

  constructor() { }

  ngOnChanges(): void {
    if (this.date) {
      this.momentDate = Moment(this.date);

      if (!this.momentDate.isValid()) {
        this.momentDate = undefined;
      }
    }
  }

  formatDate() {
    let result = '';

    if (this.momentDate) {
      result = this.momentDate.format('dddd, MMMM Do YYYY, h:mm:ss a');
    }

    return result;
  }

  fromNow() {
    let result = '';

    if (this.momentDate) {
      result = this.momentDate.fromNow();
    }

    return result;
  }
}
