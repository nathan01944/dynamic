import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

import './index.css';
import Sidebar from './Common/sidebar.js';
import Topbar from './Common/Topbar.js';

import Home from './Betting/Home/index.js';
import SubmitBet from './Betting/SubmitBet/Index';


ReactDOM.render(
  <React.StrictMode>
    <body id="page-top">
      <div id="wrapper">
        <Sidebar />
        <div id="content-wrapper" class="d-flex flex-column">
          <div id="content">
            <div id="content-wrapper" class="d-flex flex-column">
              <Topbar />
            </div>

            <Router>
              <nav>
                <ul>
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li>
                    <Link to="/SubmitBet">SubmitBet</Link>
                  </li>
                </ul>
              </nav>

              <Switch>
                <Route path="/" exact>
                  <Home />
                </Route>
                <Route path="/SubmitBet" exact>
                  <SubmitBet />
                </Route>
              </Switch>
            </Router>

          </div>
        </div>
      </div>
    </body>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();

/*
            <Router>
              <Switch>
                <Route path="/" exact>
                    <Home />
                </Route>
              </Switch>
            </Router>*/
