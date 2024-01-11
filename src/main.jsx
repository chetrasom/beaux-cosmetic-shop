import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import './styles.css';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { store } from './app/store.js';
import { Provider } from 'react-redux';
import { fetchProducts } from './features/products/productsSlice.js';

store.dispatch(fetchProducts('/api/products?populate=*'));

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
    <ToastContainer position="top-center" />
  </React.StrictMode>,
)
