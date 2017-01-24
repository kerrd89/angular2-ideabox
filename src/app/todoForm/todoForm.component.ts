import { Component } from '@angular/core';

@Component({
  selector: 'todoForm',
  templateUrl: './todoForm.component.html',
  inputs: ['addForm'],
})

export class TodoFormComponent {
  value = '';

  onKey(event:any) {
   this.value = event.target.value;
  }
 }
