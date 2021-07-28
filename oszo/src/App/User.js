import { Link } from 'react-router-dom';

import useAuth from 'Hooks/useAuth';
import { Nav } from 'UIKit';

const UserLogin = () => {
    const user = useAuth();
    console.log('UserLogin', user);
    
    const handleLogin = () => {
        user.register('asdasd');
    }

    const handleLogout = () => {
        user.clear();
    }

    if(user.authed) {
        return (
            <Nav>
                <Link to="/logout">Logout</Link>
                <h3 onClick={handleLogout}>LOGOUT</h3>
            </Nav>
        )
    }
    return (
        <Nav>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
            <h3 onClick={handleLogin}>LOGIN</h3>
        </Nav>
    )
}

export default UserLogin;