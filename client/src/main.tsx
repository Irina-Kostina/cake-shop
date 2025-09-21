import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App'
import ShopPage from './components/pages/ShopPage'
import './index.css'
import CakeDetailsPage from './components/pages/CakeDetailsPage'
import { CartProvider } from './components/pages/CartContext'
import CartPage from './components/pages/CartPage'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <CartProvider>
        <Routes>
          <Route path="/" element={<App />}>
            {/* Shop page */}
            <Route path="shop" element={<ShopPage />} />

            {/* Cake details page (using slug, not id) */}
            <Route path="shop/:slug" element={<CakeDetailsPage />} />
            <Route path="cart" element={<CartPage />} />

          </Route>
        </Routes>
      </CartProvider>
    </BrowserRouter>
  </React.StrictMode>
)
