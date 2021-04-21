import axios from 'axios';
import { Dispatch } from 'redux';
import {UserActioan, UserActioanTypes} from '../../types/users'

export const fetchUsers = () => {
    return async (dispatch:Dispatch<UserActioan>) => {
        try {
            dispatch({
                type: UserActioanTypes.FETCH_USERS,
                payload: true
            })
            const response = await axios.get('https://jsonplaceholder.typicode.com/posts/1/comments');
            setTimeout(() => {
                    dispatch({
                        type: UserActioanTypes.FETCH_USERS_SUCCESS,
                        payload: response.data
                    })
            },1000)
            
        } catch (err) {
            dispatch({
                type: UserActioanTypes.FETCH_USERS_ERROR,
                payload: err.message
            })
        }
    }
}