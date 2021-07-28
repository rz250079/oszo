import "./App.css";
import { Route, Switch, Redirect } from 'react-router-dom';
import AuthRoute from 'Auth/Route';

import { Grid } from 'UIKit';


import Home from './View/Home';
import About from './View/About';
import Receipt from './View/Receipt';
import Login from "View/Login";
import SignIn from "View/SignIn";
import Me from "Views/Me";
import Header from "App/Header";

const App = () => {
  return (
    <div className="App">
        <Grid>
            <div>
                <Header />   
            </div>
            <div>
                <Switch>
                    <Route path="/login" component={Login}></Route>
                    <Route path="/home" component={Home}></Route>
                    <Route path="/about" component={About}></Route>
                    <Route path="/receipt" component={Receipt}></Route>
                    <Route path="/register" component={SignIn}></Route>
                    <Redirect to="/login" />
                </Switch>
            </div>
        </Grid>
    </div>
  );
};

export default App;
