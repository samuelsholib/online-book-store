import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import store from './app/store'
import { Provider } from 'react-redux'
import './index.css';
import { saveState } from './app/localStorage';

store.subscribe(()=>saveState({
  user:store.getState().login,
  cart:store.getState().cart
}))

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);