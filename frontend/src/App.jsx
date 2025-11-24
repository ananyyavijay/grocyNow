import { useState } from 'react'
import './App.css'
import { Route, Routes, useLocation } from 'react-router-dom'
import Home from './pages/Home'
import Products from './pages/Products'
import Cart from './pages/Cart'
import Navbar from './components/Navbar'
import MyOrders from './pages/MyOrders'
import { useAppContext } from './context/AppContext.jsx'
import Auth from './modals/Auth'
function App() {
  const { showUserLogin, isSeller } = useAppContext();
  const isSellerPath = useLocation().pathname.includes("seller");

  return (
    <div>
      {isSellerPath ? null : <Navbar />}
      {showUserLogin ? <Auth /> : null}
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          {/* <Route path="/products/:category" element={<ProductCategory />} />
          <Route path="/product/:category/:id" element={<SingleProduct />} /> */}
          <Route path="/cart" element={<Cart />} />
          {/* <Route path="/add-address" element={<Address />} /> */}
          <Route path="/my-orders" element={<MyOrders />} />
        </Routes>
      </div>
    </div>
  )
}

export default App
