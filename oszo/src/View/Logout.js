import { Redirect } from 'react-router-dom';

import useAuth from 'Hooks/useAuth';

const Logout = () => {
    const user = useAuth();
    user.clear();

    return <Redirect to="/login" />
}

export default Logout