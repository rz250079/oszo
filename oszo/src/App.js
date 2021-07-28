import "./App.css";
import { NavLink, Link, Route, Switch, Redirect } from 'react-router-dom';

import { Grid, Icon, Line, Nav } from 'UIKit';

import Logo from './Images/logo.svg';

import Home from './View/Home';
import About from './View/About';
import Receipt from './View/Receipt';
import Login from "View/Login";
import SignIn from "View/SignIn";

const App = () => {
  return (
    <div className="App">
        <Grid>
            <div>
                <Line justify="between">
                    <Line>
                        <Link to="/home">
                            <img src={Logo} alt="NCR Logo" />
                        </Link>
                        <Nav>
                            <NavLink to="/login">Login</NavLink>
                            <NavLink to="/home">Home</NavLink>
                            <NavLink to="/about">About</NavLink>
                            <NavLink to="/receipt">Receipt</NavLink>
                        </Nav>
                    </Line>
                    <Line>
                        <Icon i="bars" />  
                    </Line>
                </Line>
            </div>
            <div>
                <Switch>
                    <Route path="/login" component={Login}></Route>
                    <Route path="/home" component={Home}></Route>
                    <Route path="/about" component={About}></Route>
                    <Route path="/receipt" component={Receipt}></Route>
                    <Route path="/signIn" component={SignIn}></Route>
                    <Redirect to="/login" />
                </Switch>
            </div>
        </Grid>
    </div>
  );
};

export default App;
