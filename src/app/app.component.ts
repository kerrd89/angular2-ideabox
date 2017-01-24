import { Component } from '@angular/core';
import Item from './dataModels/item'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  outputs: ['list', 'addItem'],
})

export class AppComponent {
  title = 'Amazon Re-Ocurring Purchases';
  public list: any[] = [new Item(Date.now(), 'detergent'),
                        new Item(Date.now(), 'shampoo'),
                        new Item(Date.now(), 'supplements')];
  public addItem(item: string) {
    this.list.push(new Item(Date.now(), item))
  }
}
