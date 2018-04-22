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
    this.resetCurrentItem();
  }

  public widgetSelected(widget: Widget) {
    this.currentSelected = widget;
  }

  public cancel(widget: Widget) {
    this.resetCurrentItem();
  }

  public saveWidget(widget: Widget) {
    if (!widget.id) {
      this.createWidget(widget);
    } else {
      this.updateWidget(widget);
    }
  }

  public deleteWidget(widget: Widget) {
    this.widgetsService.delete(widget).subscribe(response => {
      this.loadWidgets();
      this.resetCurrentItem();
    });
  }

  private loadWidgets() {
    this.widgetsService.all().subscribe(widgets => (this.widgets = widgets));
  }

  private resetCurrentItem() {
    this.currentSelected = { id: null, name: '', description: '' };
  }

  private createWidget(widget: Widget) {
    this.widgetsService.create(widget).subscribe(response => {
      this.loadWidgets();
      this.resetCurrentItem();
    });
  }

  private updateWidget(widget) {
    this.widgetsService.update(widget).subscribe(response => {
      this.loadWidgets();
      this.resetCurrentItem();
    });
  }
}
