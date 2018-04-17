import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Widget } from '../../interfaces/widget';

@Component({
  selector: 'app-widgets-list',
  templateUrl: './widgets-list.component.html',
  styleUrls: ['./widgets-list.component.css']
})
export class WidgetsListComponent implements OnInit {
  @Input() widgets: Array<Widget>;
  @Output() selectedWidget: EventEmitter<Widget> = new EventEmitter();

  constructor() {}

  ngOnInit() {}

  selectWidget(widget: Widget) {
    this.selectedWidget.emit(widget);
  }
}
