import { Component, Input } from '@angular/core';

@Component({
  selector: 'todoList',
  inputs: ['list'],
  templateUrl: './todoList.component.html',
})

export class TodoListComponent {
  title = 'todo list';

  @Input() deleteItem
  @Input() changeQuality
}
