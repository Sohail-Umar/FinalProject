import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { AdminProvider } from './Context/adminAuthContext';
import { ProductProvider } from './Context/productContext';
import { UserProvider } from './Context/userAuthContext'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <AdminProvider>
        <ProductProvider>
          <UserProvider>
            <App />
          </UserProvider>
        </ProductProvider>
      </AdminProvider>
    </BrowserRouter>
  </React.StrictMode>
);

