import { Component, OnInit } from '@angular/core';
import { ItemsService } from '../shared';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Item } from '../interfaces/item';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  item: Item;
  constructor(
    private itemsService: ItemsService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.paramMap
      .switchMap((params: ParamMap) => this.itemsService.load(params.get('id')))
      .subscribe(item => (this.item = item));
  }

  saveItem(item: Item) {
    // do something
  }
  cancelSavingItem(item: Item) {
    // do something
  }
}
