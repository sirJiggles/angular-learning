/* tslint:disable:no-unused-variable */

import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { ItemDetailComponent } from './item-detail.component';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { Item } from '../../interfaces/item';

describe('Component: ItemDetail', () => {
  let fixture: ComponentFixture<ItemDetailComponent>;
  let component: ItemDetailComponent;
  let de: DebugElement;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ItemDetailComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(ItemDetailComponent);
    component = fixture.componentInstance;
    de = fixture.debugElement;
    fixture.detectChanges();
  });

  it('should show correct item details', () => {
    const item: Item = {
      id: 1,
      name: 'some name',
      description: 'some description'
    };
    component.item = item;
    fixture.detectChanges();

    const title = de.query(By.css('h1 span'));
    expect(title.nativeElement.innerText).toBe(`Editing ${item.name}`);
  });
});
