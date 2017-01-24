import { Component } from '@angular/core';

@Component({
  selector: 'todoList',
  inputs: ['list'],
  templateUrl: './todoList.component.html',
})

export class TodoListComponent {
  title = 'todo list';
}
