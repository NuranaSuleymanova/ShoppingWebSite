import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import "./main.scss";
import Modal from 'react-modal'; // Import Modal from react-modal
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux/es/exports';
import { store } from './redux/store';

Modal.setAppElement('#root'); // Set the app element to the root element (or any other element containing your app)
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
 <BrowserRouter> 
 <Provider store={store}>
    <App />
 </Provider>
 </BrowserRouter>
  </React.StrictMode>
);


