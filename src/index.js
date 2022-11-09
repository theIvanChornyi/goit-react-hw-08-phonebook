import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'App';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import ReduxProvider from 'redux/store';
import 'react-toastify/dist/ReactToastify.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ReduxProvider>
      <BrowserRouter basename="goit-react-hw-08-phonebook">
        <App />
      </BrowserRouter>
    </ReduxProvider>
  </React.StrictMode>
);
