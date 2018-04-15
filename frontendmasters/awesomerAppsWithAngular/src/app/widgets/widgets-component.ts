import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './widgets-component.html',
  selector: 'app-widgets',
  styleUrls: ['./widgets-component.css']
})
export class WidgetsComponent implements OnInit {
  title = 'Gareth rocks';
  constructor() {}

  ngOnInit() {}
}
