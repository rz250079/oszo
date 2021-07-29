import { Link, NavLink } from 'react-router-dom';
import { Line, Nav, Inner } from 'UIKit';
import Logo from 'Images/logo.svg';

import useAuth from 'Hooks/useAuth';


import UserLogin from './User';

const Header = () => {
    const user = useAuth();


    return (
        <Inner>
            <Line justify="between">
            <Line>
                <Link to="/home">
                    <img src={Logo} alt="NCR Logo" />
                </Link>
                <Nav>
                    {user.authed ? 
                    (
                        <>
                        <NavLink to="/home">Home</NavLink>
                        <NavLink to="/me">My Receipts</NavLink>
                        </>
                    ) : 
                    (
                        <>
                        <NavLink to="/home">Home</NavLink>
                        </>
                    )
                    }
                    
                </Nav>
            </Line>
            <Line>
                <UserLogin />
            </Line>
         </Line>
        </Inner>
    )
}

export default Header