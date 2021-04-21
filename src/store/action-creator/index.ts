import * as TodoActioanCreators from './todo';
import * as UserActionCreators from './user';

export default {
    ...UserActionCreators,
    ...TodoActioanCreators
}