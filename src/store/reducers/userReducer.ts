import {UserState, UserActioan, UserActioanTypes} from '../../types/users'

const initialState: UserState = {
  users: [],
  loading: false,
  error: null,
};

const userReducer = (
  state: UserState = initialState,
  action: UserActioan
): UserState => {
  switch (action.type) {
    case UserActioanTypes.FETCH_USERS:
      return {
        ...state,
        loading: true,
      };
    case UserActioanTypes.FETCH_USERS_SUCCESS:
      return {
        ...state,
        loading: false,
        users: action.payload,
      };
    case UserActioanTypes.FETCH_USERS_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
  }
  return state;
};

export default userReducer;
