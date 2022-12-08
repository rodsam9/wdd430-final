import { Component, OnInit } from '@angular/core';
import { Todo } from '../todo.model';

@Component({
  selector: 'app-todo-detail',
  templateUrl: './todo-detail.component.html',
  styleUrls: ['./todo-detail.component.css']
})
export class TodoDetailComponent implements OnInit {
  public todos = [];
  public newTodo;

  public addToList() {
    if(this.newTodo == ''){

    }else {
      this.todos.push(this.newTodo);
      this.newTodo = '';
    }
  }
  constructor() { }

  ngOnInit(): void {
  }

}
