import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import 'react-toastify/dist/ReactToastify.css';
import './index.css';
import App from './App';
import { ReduxStore } from './ConfigFiles/ProjectReduxStore';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={ReduxStore}>
      <App />
    </Provider>
  </React.StrictMode>
);

