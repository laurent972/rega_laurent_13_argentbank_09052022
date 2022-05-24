import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import userReducer from './reducers/user.reducer';
import authReducer from './reducers/auth.reducer';
import { configureStore  } from '@reduxjs/toolkit';
import App from './App';
import './style/index.scss';
import thunk from 'redux-thunk';

//DEV tools 
import logger from 'redux-logger'



const store = configureStore (
  {
    reducer:{
      user:userReducer,
      auth:authReducer
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


