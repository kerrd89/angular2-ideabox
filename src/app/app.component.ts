import { Component, Output } from '@angular/core';
import Item from './dataModels/item'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  outputs: ['list', 'addItem', 'deleteItem']
})

export class AppComponent {
  title = 'million dollar ideas';
  public list: any[] = [];

  //can't use es6 syntax for lifecycle events
  ngOnInit() {
    let data = localStorage.getItem('list');
    if (data) {
      this.list = JSON.parse(data);
    }
  }
  ngOnDestroy() {
    localStorage.setItem('list', JSON.stringify(this.list));
  }

  //CRUD functionality
  addItem = (item: string) => {
    this.list.push(new Item(Date.now(), item, 1));
    console.log(this.list)
    localStorage.setItem('list', JSON.stringify(this.list));
  }
  deleteItem = (id: number) => {
    this.list.forEach((item, index) => {
      if (item.id === id) {
        this.list.splice(index, 1);
        localStorage.setItem('list', JSON.stringify(this.list));
      }
    })
  }
}
