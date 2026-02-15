import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App'
import ResourcesPage from './pages/Resources'
import PricingPage from './pages/Pricing'
import ContactPage from './pages/Contact'

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/recursos" element={<ResourcesPage />} />
        <Route path="/precos" element={<PricingPage />} />
        <Route path="/contato" element={<ContactPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Router
