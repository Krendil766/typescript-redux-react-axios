import { ITodoState, TodosActionTypes, TodoActions } from "../../types/todo";

const initalState:ITodoState = {
  todos: [],
  loading: false,
  error: null,
  page: 1,
  limit: 2,
};

export const todoReducer = (
  state: ITodoState = initalState,
  action: TodoActions
): ITodoState => {
  switch (action.type) {
    case TodosActionTypes.FETCH_TODOS:
      return {
        ...state,
        loading: true,
      };
    case TodosActionTypes.FETCH_TODOS_SUCCESS:
      return {
        ...state,
        loading: false,
        todos: action.payload,
      };
    case TodosActionTypes.FETCH_TODOS_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
          };
      case TodosActionTypes.SET_TODO_PAGE:
          return {
              ...state,
              page:action.payload
          }
      case TodosActionTypes.SET_TODO_LIMIT:
          return {
              ...state,
              limit:action.payload
          }
    default:
      return state;
  }
};
