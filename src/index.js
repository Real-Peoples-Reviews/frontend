import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../src/Sass/app.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import logger from 'redux-logger'
import { BrowserRouter as Router } from "react-router-dom";

import { rootReducer } from "./state/Reducers";

const store = createStore(rootReducer, applyMiddleware(thunk, logger));
console.log("STORE", store.getState());

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Provider store={store}>
        <App />
      </Provider>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
