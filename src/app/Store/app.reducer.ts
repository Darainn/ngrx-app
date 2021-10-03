import { createReducer, Action, on } from '@ngrx/store';

import { ITodo } from '../interface/todo.interface';
import * as AppAction from './app.action';

export interface AppState {
  todos: ITodo[];
}

const initialState: AppState = {
  todos: [],
};

const appReducer = createReducer(
  initialState,
  on(AppAction.addItemToList, (state, todos) => ({
    ...state,
    todos: [todos, ...state.todos],
  })),
  on(AppAction.removeItemFromList, (state, todos) => {
    return {
      ...state,
      todos: state.todos.filter((todoItem) => {
        return todoItem.id !== todos.id;
      }),
    };
  })
);
export function reducer(state: AppState = initialState, action: Action) {
  return appReducer(state, action);
}
