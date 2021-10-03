import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { ITodo } from '../interface/todo.interface';
import { addItemToList, removeItemFromList } from '../Store/app.action';
import { AppState } from '../Store/app.reducer';
import { selectTodos } from '../Store/app.selector';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  constructor(private store: Store<AppState>) {}

  todos!: Observable<ITodo[]>;
  addedTodo!: string;
  todosList: any;

  ngOnInit(): void {}

  addTodo() {
    const newTodo = {
      id: Date.now(),
      todo: this.addedTodo,
    };
    this.store.dispatch(addItemToList(newTodo));
    this.selecTodo();
    this.addedTodo = '';
  }
  removeTodo(todo: ITodo) {
    this.store.dispatch(removeItemFromList(todo));
  }

  selecTodo() {
    this.store
      .select(selectTodos)
      .pipe(filter((todo) => !!todo))
      .subscribe((value) => {
        this.todosList = value;
      });
  }
}
