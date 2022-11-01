import { FC } from 'react'
import { Routes, Route } from 'react-router-dom'

import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import Cart from '../../pages/Cart/Cart'
import Home from '../../pages/Home/Home'
import AboutPerfume from '../../pages/AboutPerfume/AboutPerfume'
import Catalog from '../../pages/Catalog/Catalog'

const App: FC = () => (
  <div className="App">
    <Header />
    <main>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/catalog/*" element={<Catalog />} />
        <Route path="/PerfumeId/:PerfumeId" element={<AboutPerfume />} />
        {/*<Route path="/*" element={<Navigate to="/home" />} />*/}
      </Routes>
    </main>
    <Footer />
  </div>
)

export default App
