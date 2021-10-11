import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { ITodo } from 'src/app/interface/todo.interface';

@Injectable({
  providedIn: 'root',
})
export class TodosService {
  todoSource = new BehaviorSubject([]);
  todo$: Observable<Partial<any>> = this.todoSource.asObservable();

  constructor() {}

  addItem(todo: ITodo) {
    const todosList: any = [todo, ...this.todoSource.value];
    this.todoSource.next(todosList);
    window.localStorage.setItem('todo', JSON.stringify(todosList));
  }

  removeItem(todo: ITodo) {
    const todosList = this.todoSource.value.filter(
      (item: any) => item.id !== todo.id
    );
    this.todoSource.next([...todosList]);
    window.localStorage.setItem('todo', JSON.stringify(todosList));
  }
}
