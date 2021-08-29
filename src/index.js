import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Sidebar from './Visual/sidebar.js';
import Topbar from './Visual/Topbar.js';
import FeaturedBets from './Visual/FeaturedBets.js';

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
            <div class="container-fluid"> 
              <FeaturedBets />
            </div>
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
