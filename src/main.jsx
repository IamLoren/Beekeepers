import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import App from './App.jsx'; 
import { Provider } from 'react-redux';
import { persistor, store } from './redux/store.js';
import { PersistGate } from 'redux-persist/integration/react';
import { ToastContainer } from 'react-toastify';
import Global from './css/common.js';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename="/Beekeepers">
      <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <App />
        <Global />
      </PersistGate>
      <ToastContainer autoClose={1500} />
      </Provider> 
    </BrowserRouter>
  </React.StrictMode>,
);
