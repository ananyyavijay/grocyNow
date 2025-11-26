import './App.css'
import { Route, Routes, useLocation } from 'react-router-dom'
import Home from './pages/Home'
import Products from './pages/Products'
import Cart from './pages/Cart'
import Navbar from './components/Navbar'
import MyOrders from './pages/MyOrders'
import { useAppContext } from './context/AppContext.jsx'
import ProductCategory from './pages/ProductCategory.jsx'
import Auth from './modals/Auth'
import Footer from './components/Footer.jsx'
import { Toaster } from 'react-hot-toast'
import SingleProduct from './pages/SingleProduct.jsx'
import AddAddress from './pages/AddAddress.jsx'

function App() {
  const { showUserLogin, isSeller } = useAppContext();
  const isSellerPath = useLocation().pathname.includes("seller");

  return (
    <div>
      {isSellerPath ? null : <Navbar />}
      {showUserLogin ? <Auth /> : null}
      <Toaster />
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:category" element={<ProductCategory />} />
          <Route path="/product/:category/:id" element={<SingleProduct />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/add-address" element={<AddAddress />} />
          <Route path="/my-orders" element={<MyOrders />} />
        </Routes>
      </div>
      {isSellerPath ? null : <Footer />}
    </div>
  )
}

export default App
