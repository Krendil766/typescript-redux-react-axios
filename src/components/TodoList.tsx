import React, { useEffect, FC } from 'react';
import { useActions } from './hooks/useActions';
import { useTypedSelector } from './hooks/useTypedSelector';

const TodoList: FC = () => {
    const { todos, loading, error, page, limit } = useTypedSelector(state => state.todos);
    const { fetchTodos, setTodosPage, setTodosLimit } = useActions();
    useEffect(() => {
        fetchTodos(page, limit);
    }, [page, limit]);
    const pages = [1, 2, 3, 4, 5];
    const limits = [2,4,8,12];

    if (loading) {
        return (
            <h1>Connect server...</h1>
        )
    }
    if (error) {
        return (
            <h1>{error}</h1>
        )
    }
    const onPageClick = (p: number) => {
        setTodosPage(p)
    };
    const onLimitClick = (l:number) => {
        setTodosLimit(l)
    }
    return (
        <div>
            <div style={{ display: 'flex' }} >
                {
                    limits.map((item, i) => (           
                        <div
                            style={{ border: item === limit ? '4px solid green' : '1px solid black', padding: 2 }}
                            onClick={() => onLimitClick(item)}>
                            {item}{console.log(limit)}
                        </div>
                    ))
                }
            </div>
            {
                todos.map((item, i) => (
                    <p key={item.id}><b>{item.id + " "}</b>{item.title}</p>
                ))
            }
            <div style={{ display: 'flex' }} >
                {
                    pages.map((item, i) => (
                        <div
                            style={{ border: item === page ? '2px solid green' : '1px solid grey', padding: 10 }}
                            onClick={() => onPageClick(item)}>
                            {item}
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default TodoList