import { NavLink } from 'react-router-dom';

import useAuth from 'Hooks/useAuth';
import { Nav } from 'UIKit';

const UserLogin = () => {
    const user = useAuth();
    

    if(user.isLoading) {
        return null;
    }

    if(user.authed) {
        return (
            <Nav>
                <NavLink to="/logout">Logout</NavLink>
            </Nav>
        )
    }
    return (
        <Nav>
            <NavLink to="/login">Login</NavLink>
            <NavLink to="/register">Register</NavLink>
        </Nav>
    )
}

export default UserLogin;