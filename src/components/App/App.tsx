import { FC } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'

import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import Cart from '../../pages/Cart/Cart'
import Home from '../../pages/Home/Home'
import AboutPerfume from '../../pages/AboutPerfume/AboutPerfume'
import Catalog from '../../pages/Catalog/Catalog'
import Checkout from '../../pages/Checkout/Checkout'
import SuccessPopup from '../../pages/Checkout/SuccessPopup'
import './App.scss'
import NotFound from '../../pages/NotFound/NotFound'

const App: FC = () => (
  <div className="App">
    <Header />
    <main>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/catalog/*" element={<Catalog />} />
        <Route path="/PerfumeId/:PerfumeId" element={<AboutPerfume />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/checkout/success" element={<SuccessPopup />} />
        <Route path="/404" element={<NotFound />} />
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/*" element={<Navigate to="/404" />} />
      </Routes>
    </main>
    <Footer />
  </div>
)

export default App
