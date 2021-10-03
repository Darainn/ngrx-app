import { createSelector } from '@ngrx/store';
import { ITodo } from '../interface/todo.interface';

export const selectTodoState = (state: any) => {
  return state.app;
};

export const selectTodos = createSelector(
  selectTodoState,
  (state) => state?.todos
);
