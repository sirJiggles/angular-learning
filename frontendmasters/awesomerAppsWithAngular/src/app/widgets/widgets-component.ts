import { Component, OnInit } from '@angular/core';
import { Widget } from '../interfaces/widget';
import { WidgetsService } from '../shared';

@Component({
  templateUrl: './widgets-component.html',
  selector: 'app-widgets',
  styleUrls: ['./widgets-component.css']
})
export class WidgetsComponent implements OnInit {
  currentSelected: Widget;
  widgets: Array<Widget>;

  constructor(private widgetsService: WidgetsService) {}

  ngOnInit() {
    this.loadWidgets();
  }

  widgetSelected(widget: Widget) {
    this.currentSelected = widget;
  }

  saveWidget(widget: Widget) {
    const widgets = this.widgets.map(currWidget => {
      if (widget.id === currWidget.id) {
        return widget;
      }
      return currWidget;
    });
    // overide the widgets with new state
    this.widgets = widgets;
  }

  private loadWidgets() {
    this.widgetsService
      .loadWidgets()
      .subscribe(widgets => (this.widgets = widgets));
  }
}
