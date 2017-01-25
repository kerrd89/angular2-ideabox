import { Component, Input } from '@angular/core';

@Component({
  selector: 'todoForm',
  templateUrl: './todoForm.component.html',
})

export class TodoFormComponent {
  value = '';
  onSubmit = ($event) => {
    $event.preventDefault()
    this.addItem($event.target.value.value)
    this.value = ''
  }
  @Input() addItem;
 }
