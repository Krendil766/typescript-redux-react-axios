import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useTypedSelector } from './hooks/useTypedSelector';
import { fetchUsers } from '../store/action-creator/user'

const UserList: React.FC = () => {
    const { users, error, loading } = useTypedSelector(state => state.users)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchUsers())
    }, [dispatch])

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
    return (
        <div>
            {users.map((item, i) => (
                <div key={i}>{item.title}</div>
            ))}
        </div>
    )
}

export default UserList;