import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Widget } from '../../interfaces/widget';

@Component({
  selector: 'app-widgets-list',
  templateUrl: './widgets-list.component.html',
  styleUrls: ['./widgets-list.component.css']
})
export class WidgetsListComponent implements OnInit {
  @Input() widgets: Array<Widget>;
  @Input() readonly = false;
  @Output() selected: EventEmitter<Widget> = new EventEmitter();
  @Output() deleted: EventEmitter<Widget> = new EventEmitter();

  constructor() {}

  ngOnInit() {}
}
