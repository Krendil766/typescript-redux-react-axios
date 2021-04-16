export interface UserState {
    users: any[];
    loading: boolean;
    error: null | string;
  }
  
  export enum UserActioanTypes {
    FETCH_USERS = "FETCH_USERS",
    FETCH_USERS_SUCCESS = "FETCH_USERS_SUCCESS",
    FETCH_USERS_ERROR = "FETCH_USERS_ERROR",
  }
  
  interface FetchUsersAction {
    type: UserActioanTypes.FETCH_USERS;
    payload: boolean;
  }
  interface FetchUsersSuccessAction {
    type: UserActioanTypes.FETCH_USERS_SUCCESS;
    payload: any[];
  }
  interface FetchUsersErrorAction {
    type: UserActioanTypes.FETCH_USERS_ERROR;
    payload: string;
  }
  
  export type UserActioan =
    | FetchUsersAction
    | FetchUsersSuccessAction
    | FetchUsersErrorAction;

