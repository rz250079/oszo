

import React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter as Router } from 'react-router-dom';

//redux
import { Provider } from "react-redux";
import store from 'State/store';


import './index.css';

import App from './App';


ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App/>
    </Router>
  </Provider>,
  document.getElementById("root")
);
