import { Link, NavLink } from 'react-router-dom';
import { Line, Icon, Nav } from 'UIKit';
import Logo from 'Images/logo.svg';

import UserLogin from './User';

const Header = () => {
    return (
        <Line justify="between">
        <Line>
            <Link to="/home">
                <img src={Logo} alt="NCR Logo" />
            </Link>
            <Nav>
                <NavLink to="/home">Home</NavLink>
                <NavLink to="/about">About</NavLink>
                <NavLink to="/me">My Receipts</NavLink>
            </Nav>
        </Line>
        <Line>
            <UserLogin />
        </Line>
    </Line>
    )
}

export default Header