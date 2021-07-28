import { Icon, Rows, Line,Nav } from 'UIKit';
import "./SignIn.css";
import Logo from '../Images/logo.svg';
import { NavLink, Link, Route, Switch, Redirect } from 'react-router-dom';


const SignIn = () => {
    return (
        <div className="SignIn">
            <Rows>
                <Line>
                    <h1 className="loginHeader">Hi!</h1>
                    <h1 className="loginHeader">Please Sign In</h1>
                </Line>
                <Line>
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
                            <Icon i="at" />
                                <input type="email" placeholder="Enter E-mail" name="email" required></input>
                            </Line>
                        <Line> 
                            <button><strong>Sign In</strong></button>
                        </Line>
                       <Line>
                        </Line>
                    </form>
                </Line>
            </Rows>
        </div>
    )

}

export default SignIn;