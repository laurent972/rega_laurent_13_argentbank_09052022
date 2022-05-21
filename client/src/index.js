import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import userReducer from './reducers/user.reducer';
import { configureStore  } from '@reduxjs/toolkit';
import App from './App';
import './style/index.scss';

import thunk from 'redux-thunk';
import { applyMiddleware } from 'redux';



//DEV tools 
import { composeWithDevTools} from 'redux-devtools-extension';
import logger from 'redux-logger'


const store = configureStore (
  {
    reducer:{
      userReducer
    }
  }
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);


