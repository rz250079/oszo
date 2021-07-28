
import { useEffect } from 'react';
import useAuth from 'Hooks/useAuth';

import { useDispatch } from 'react-redux';
import { getUserReceipts } from 'State/user';

const Me = () => {
    const dispatch = useDispatch();
    const user = useAuth();
    console.log(user);

    useEffect(() => {
        dispatch(getUserReceipts);
    }, []);
    return (
        <div>
            <h2>ME</h2>
            <h3>Username: {user.info.username}</h3>
            <h3>Mail: {user.info.mail}</h3>
        </div>
    )
}

export default Me;