import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useTypedSelector} from './hooks/useTypedSelector';
import { fetchUsers } from '../store/action-creator/user';
import {useActions} from './hooks/useActions'

const UserList: React.FC = () => {
    const { users, error, loading } = useTypedSelector(state => state.users)
    // const dispatch = useDispatch()
    const {fetchUsers}=useActions();
    useEffect(() => {
        // dispatch(fetchUsers())
        fetchUsers()
    }, [])

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
                <div key={i}>{item.email}</div>
            ))}
        </div>
    )
}

export default UserList;