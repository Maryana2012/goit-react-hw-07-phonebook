import PhoneBook from 'components/App';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import './index.css';
import { store } from 'redux/store';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
          <PhoneBook />
      </Provider>
  </React.StrictMode>
);

// https://648b4f5917f1536d65eac5bd.mockapi.io