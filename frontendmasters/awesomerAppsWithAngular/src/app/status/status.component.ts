import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.css']
})
export class StatusComponent implements OnInit {
  @Input() loggedIn = false;
  @Output() logout: EventEmitter<any> = new EventEmitter();
  @Output() login: EventEmitter<any> = new EventEmitter();

  constructor() {}

  ngOnInit() {}
}
