import { Component, OnInit } from '@angular/core';
import { ItemsService } from '../shared/items.service';
import { WidgetsService } from '../shared/widgets.service';
import { Item } from '../interfaces/item';
import { Widget } from '../interfaces/widget';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  items: Item[];
  widgets: Array<Widget>;
  isLoggedIn = false;

  constructor(
    private itemsService: ItemsService,
    private widgetsService: WidgetsService
  ) {}

  ngOnInit() {
    this.getItems();
    this.getWidgets();
  }

  getItems() {
    this.itemsService.all().subscribe(items => (this.items = items));
  }
  getWidgets() {
    this.widgetsService.all().subscribe(widgets => (this.widgets = widgets));
  }
  handeResults(items: Array<Item>) {
    this.items = items;
  }

  login(e: any) {
    this.isLoggedIn = !this.isLoggedIn;
  }
  logout(e: any) {
    this.isLoggedIn = !this.isLoggedIn;
  }
}
