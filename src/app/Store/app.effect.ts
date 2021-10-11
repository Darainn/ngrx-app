import { Injectable } from '@angular/core';
import {
  Actions,
  createEffect,
  ofType,
  ROOT_EFFECTS_INIT,
} from '@ngrx/effects';
import { map } from 'rxjs/operators';
import { TodosService } from '../core/services/todo/todos.service';
import * as TodoActions from './app.action';
@Injectable()
export class TodosEffects {
  addItemToBucket$ = createEffect(() =>
    this.actions$.pipe(
      ofType(TodoActions.addItemToList),
      map((action) => {
        this.todoService.addItem(action);
        return { type: 'Noop' };
      })
    )
  );
  removeItemFromBucket$ = createEffect(() =>
    this.actions$.pipe(
      ofType(TodoActions.removeItemFromList),
      map((action) => {
        this.todoService.removeItem(action);
        return { type: 'Noop' };
      })
    )
  );
  constructor(private actions$: Actions, private todoService: TodosService) {}
}
