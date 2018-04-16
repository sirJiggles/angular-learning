import { Component, OnInit, Input } from '@angular/core';
import { Item } from '../interfaces/item';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css']
})
export class ReviewComponent implements OnInit {
  @Input() item: Item;
  ratings = ['1', 'two'];

  constructor() {}

  ngOnInit() {}
}
