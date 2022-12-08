import { Component, OnInit, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { Todo } from '../todo.model';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  @ViewChild('todoName')
  todoName!: ElementRef;
  todos: Todo[] = [
    new Todo('1', 'Walk the dog'),
    new Todo('2', 'Do homework'),
    new Todo('3', 'Take out the trash')
  ];

  constructor() { }

  ngOnInit(): void {
  }

  onDelete() {
    this.todoName.nativeElement.value = '';
  }

}
