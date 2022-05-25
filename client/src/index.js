import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';

import { configureStore  } from '@reduxjs/toolkit';
import App from './App';
import './style/index.scss';
import thunk from 'redux-thunk';
import { applyMiddleware, createStore } from 'redux';

import rootReducer from './reducers'

//DEV tools 
import logger from 'redux-logger'
import { composeWithDevTools } from 'redux-devtools-extension';

const store = createStore(
  rootReducer, composeWithDevTools(applyMiddleware(thunk, logger))
)

// const store = configureStore (
//   {
//     reducer:{
//       rootReducer,
//       user:userReducer,
//       auth:authReducer
//     }
    
    
//   }
// )

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);


