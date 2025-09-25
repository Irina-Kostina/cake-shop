import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App'
import ShopPage from './components/pages/ShopPage'
import './index.css'
import CakeDetailsPage from './components/pages/CakeDetailsPage'
import { CartProvider } from './components/pages/CartContext'
import CartPage from './components/pages/CartPage'
import { Auth0Provider } from '@auth0/auth0-react'

// ✅ Get Auth0 env vars from Vite
const domain = import.meta.env.VITE_AUTH0_DOMAIN
const clientId = import.meta.env.VITE_AUTH0_CLIENT_ID
const audience = import.meta.env.VITE_AUTH0_AUDIENCE // optional, only needed if you're calling backend APIs

console.log('ENV CHECK:', { domain, clientId, audience })

// ✅ Safety check to avoid empty Auth0 config (optional but helpful)
if (!domain || !clientId) {
  throw new Error('Missing Auth0 environment variables!')
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      authorizationParams={{
        redirect_uri: window.location.origin,
        // audience, // optional: only if you're using APIs with access tokens
      }}
    >
      <BrowserRouter>
        <CartProvider>
          <Routes>
            <Route path="/" element={<App />}>
              <Route path="shop" element={<ShopPage />} />
              <Route path="shop/:slug" element={<CakeDetailsPage />} />
              <Route path="cart" element={<CartPage />} />
            </Route>
          </Routes>
        </CartProvider>
      </BrowserRouter>
    </Auth0Provider>
  </React.StrictMode>
)
