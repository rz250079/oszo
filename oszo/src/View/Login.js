import { Icon, Rows, Line,Nav } from 'UIKit';
import "./Login.css";
import Logo from '../Images/logo.svg';
import { NavLink, Link, Route, Switch, Redirect } from 'react-router-dom';


const Login = () => {
    return (
        <div className="Login">
            <Rows>
                <Line>
                    <h1 className="loginHeader">Login</h1>
                    <img src={Logo} alt="NCR Logo" />
                </Line>
                <Line>
                    <form method="post">
                            <Line>
                            <Icon i="user" />
                                <input type="username" placeholder="Enter Username" name="user" required></input>
                            </Line>
                            <Line>
                            <Icon i="key" />
                                <input type="password" placeholder="Enter Password" name="psw" required></input>
                            </Line>
                        <Line> 
                            <button><strong>Login</strong></button>
                        </Line>
                       <Line>
                        <Nav>
                        <Icon i="user-tie"/>
                            <NavLink className="signIn" to="/signIn">First time here ? click here to sign in </NavLink>
                        </Nav>
                        </Line>
                    </form>
                </Line>
            </Rows>
        </div>
    )

}

export default Login;