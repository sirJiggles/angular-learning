import { Component, OnInit } from '@angular/core';
import { Widget } from '../interfaces/widget';
import { WidgetsService } from '../shared';

@Component({
  templateUrl: './widgets-component.html',
  selector: 'app-widgets',
  styleUrls: ['./widgets-component.css']
})
export class WidgetsComponent implements OnInit {
  selectedWidget: Widget;
  widgets: Array<Widget>;

  constructor(private widgetsService: WidgetsService) {
    this.widgets = widgetsService.widgets;
  }

  selectWidget(widget: Widget) {
    this.selectedWidget = widget;
  }

  ngOnInit() {}
}
