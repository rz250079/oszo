import "./App.css";
import { Route, Switch, Redirect } from 'react-router-dom';
import AuthRoute from 'Auth/Route';

import { Grid } from 'UIKit';


import Home from './View/Home';
import About from './View/About';
import Receipt from './View/Receipt';
import Me from './View/Me'; 

import Header from 'App/Header';

const App = () => {
  return (
    <div className="App">
        <Grid>
            <div>
              <Header />
            </div>
            <div>
                <Switch>
                    <Route path="/home" component={Home}></Route>
                    <Route path="/about" component={About}></Route>
                    <Route path="/receipt" component={Receipt}></Route>
                    <AuthRoute path="/me" component={Me}/>

                    <Redirect to="/home" />
                </Switch>
            </div>
        </Grid>
    </div>
  );
};

export default App;
