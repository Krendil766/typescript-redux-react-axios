export interface ITodoState {
  todos: any[];
  loading: boolean;
  error: null | string;
  page: number;
  limit: number;
}

export enum TodosActionTypes {
  FETCH_TODOS = "FETCH_TODOS",
  FETCH_TODOS_SUCCESS = "FETCH_TODOS_SUCCESS",
  FETCH_TODOS_ERROR = "FETCH_TODOS_ERROR",
  SET_TODO_PAGE = "SET_TODO_PAGE",
  SET_TODO_LIMIT = "SET_TODO_LIMIT",
}

interface FetchTodosActions {
  type: TodosActionTypes.FETCH_TODOS;
  payload: boolean;
}
interface FetchTodosSuccessActions {
  type: TodosActionTypes.FETCH_TODOS_SUCCESS;
  payload: any[];
}
interface FetchTodosErrorActions {
  type: TodosActionTypes.FETCH_TODOS_ERROR;
  payload: string;
}
interface SetTodosPageActions {
  type: TodosActionTypes.SET_TODO_PAGE;
  payload: number;
}
interface SetTodosLimitActions {
  type: TodosActionTypes.SET_TODO_LIMIT;
  payload: number;
}

export type TodoActions =
  | FetchTodosActions
  | FetchTodosSuccessActions
  | FetchTodosErrorActions
  | SetTodosPageActions
  | SetTodosLimitActions;
