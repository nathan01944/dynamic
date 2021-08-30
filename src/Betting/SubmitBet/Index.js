import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Sidebar from './Common/sidebar.js';
import Topbar from './Common/Topbar.js';


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
                <ul>
                    <li><Link to="Betting/SubmitBet">Submit Bet</Link></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </body>
    </React.StrictMode>,
    document.getElementById('root')
  );