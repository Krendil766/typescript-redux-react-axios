import { Dispatch } from "react"
import { ITodoState, TodoActions, TodosActionTypes } from '../../types/todo';
import axios, { AxiosResponse } from 'axios';

export const fetchTodos = (page=1,limit=2) => {
    return async (dispatch:Dispatch<TodoActions>) => {
        try {
            dispatch({
                type: TodosActionTypes.FETCH_TODOS,
                payload:true
            })
            const response: AxiosResponse<any[]> = await axios.get('https://jsonplaceholder.typicode.com/users/1/todos', {
                params:{_page:page,_limit:limit}
            });

            setTimeout(() => {
                dispatch({
                    type: TodosActionTypes.FETCH_TODOS_SUCCESS,
                    payload:response.data
                })
            },1000)
        } catch {
            dispatch({
                type: TodosActionTypes.FETCH_TODOS_ERROR,
                payload:'Error. Conect server...'
            })
        }
    }
}

export const setTodosPage = (page:number):TodoActions => {
    return {
        type: TodosActionTypes.SET_TODO_PAGE,
        payload:page
   }
}
export const setTodosLimit = (limit:number):TodoActions => {
    return {
        type: TodosActionTypes.SET_TODO_LIMIT,
        payload:limit
   }
}