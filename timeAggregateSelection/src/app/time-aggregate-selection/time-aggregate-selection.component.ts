import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'time-aggregate-selection',
  templateUrl: './time-aggregate-selection.component.html',
  styleUrls: ['./time-aggregate-selection.component.css'],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class TimeAggregateSelectionComponent implements OnInit {
  timePeriodSelections: string[];

  constructor() { 
    this.timePeriodSelections = [
      "Week", "Period", "Total"
    ];
  }

  ngOnInit() {
  }

}
