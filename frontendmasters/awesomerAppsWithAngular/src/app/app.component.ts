import { Component, OnInit } from '@angular/core';
import { MdSnackBar } from '@angular/material';
import { NotificationsService } from './shared';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Angular REST App';
  links = [
    { path: '/home', icon: 'home', label: 'Home' },
    { path: '/items', icon: 'list', label: 'Items' },
    { path: '/widgets', icon: 'web', label: 'Widgets' },
    { path: '/reviews', icon: 'star', label: 'Reviews' }
  ];

  constructor(private snackbar: MdSnackBar, private ns: NotificationsService) {}

  ngOnInit() {
    this.ns.notifications$.subscribe((notification: string) =>
      this.snackbar.open(notification, 'Ok', {
        duration: 4000
      })
    );
  }
}
