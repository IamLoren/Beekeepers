import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { Provider } from 'react-redux';
import { persistor, store } from './redux/store.js';
import { PersistGate } from 'redux-persist/integration/react';
import Global from './css/common.js';
import './index.css';
import 'react-toastify/dist/ReactToastify.css';
import StyledToastContainer from './components/Toast/Toast.jsx';
import ThemeClass from './components/Theme/Theme.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Provider store={store}>
      <ThemeClass/>
      <PersistGate loading={null} persistor={persistor}>
        <App />
        <Global />
      </PersistGate>
      <StyledToastContainer />
    </Provider>
  </BrowserRouter>
);
