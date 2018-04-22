import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Widget } from '../../interfaces/widget';

@Component({
  selector: 'app-widgets-details',
  templateUrl: './widgets-details.component.html',
  styleUrls: ['./widgets-details.component.css']
})
export class WidgetsDetailsComponent implements OnInit {
  currentWidget: Widget;

  @Input()
  set currentSelectedWidget(newSelection: Widget) {
    if (newSelection) {
      this.originalWidget = Object.assign({}, newSelection);
      this.currentWidget = Object.assign({}, newSelection);
    }
  }

  @Output() saved: EventEmitter<Widget> = new EventEmitter();
  @Output() cancelled: EventEmitter<Widget> = new EventEmitter();

  originalWidget: Widget;

  constructor() {}

  ngOnInit() {}
}
