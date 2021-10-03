import { createAction, props } from '@ngrx/store';
import { ITodo } from '../interface/todo.interface';

export const addItemToList = createAction(
  '[ToDo List] Add Item',
  props<ITodo>()
);

export const removeItemFromList = createAction(
  '[Todo List] Remove Item',
  props<ITodo>()
);
