import { Routes, Route } from 'react-router-dom'

import Header from '../Header/Header'
import Cart from '../../pages/Cart/Cart'
import Home from '../../pages/Home/Home'
import Footer from '../Footer/Footer'

const App = () => {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
