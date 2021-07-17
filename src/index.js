import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from "react-router-dom";

import './index.css';
import reportWebVitals from './reportWebVitals';
import App from './App';
import { store } from "./redux";

ReactDOM.render(
    <React.StrictMode>
      <Provider store={store}>
        <Router>
          <App/>
        </Router>
      </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);

reportWebVitals();
