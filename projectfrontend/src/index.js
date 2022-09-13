import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { ProductProvider } from './Context/productContext';
import { UserProvider } from './Context/userContext'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ProductProvider>
        <UserProvider>
          <App />
        </UserProvider>
      </ProductProvider>
    </BrowserRouter>
  </React.StrictMode>
);

