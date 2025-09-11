import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App'
import ShopPage from './components/pages/ShopPage'
import './index.css'
import CakeDetailsPage from './components/pages/CakeDetailsPage.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          {/* <Route index element={<HomePage />} /> */}
          <Route path="shop" element={<ShopPage />} />
          {/* <Route path="/cakes/:id" element={<ShopPage />} /> */}
          <Route path="/cakes/:id" element={<CakeDetailsPage />} />
        </Route>
      </Routes>
      
    </BrowserRouter>
  </React.StrictMode>
)
