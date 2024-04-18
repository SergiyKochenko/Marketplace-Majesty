import { useEffect, useState } from 'react'
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Register from './views/auth/register';
import Login from './views/auth/login'
import Dashboard from './views/auth/dashboard';
import Logout from './views/auth/logout';
import ForgotPassword from './views/auth/forgotPassword';
import CreatePassword from './views/auth/createPassword';
import StoreHeader from './views/base/StoreHeader';
import StoreFooter from './views/base/StoreFooter';
import Products from './views/store/Products';
import ProductDetail from './views/store/ProductDetail';
import Cart from './views/store/Cart';
import Checkout from './views/store/Checkout';
import PaymentSuccess from './views/store/PaymentSuccess';
import Search from './views/store/Search';
import { CartContext } from './views/plugin/Context';
import CartID from './views/plugin/CardID';
import UserData from './views/plugin/UserData';
import apiInstance from './utils/axios';


function App() {
  const [count, setCount] = useState(0)
  const [cartCount, setCartCount] = useState()

  const cart_id = CartID()
  const userData = UserData()

  useEffect(() => {
    const url = userData ? `cart-list/${cart_id}/${userData?.user_id}/` : `cart-list/${cart_id}/`;
    apiInstance.get(url).then((res) => {
      setCartCount(res.data.length)
    })
  }, [])

  return (
    <CartContext.Provider value={[cartCount, setCartCount]}>

      <BrowserRouter>
  <StoreHeader />
    <Routes>
      <Route path='/login' element={<Login />} />
      <Route path='/register' element={<Register />} />
      <Route path='/logout' element={<Logout />} />
      <Route path='/dashboard' element={<Dashboard />} />
      <Route path='/forgot-password' element={<ForgotPassword />} />
      <Route path='/create-new-password' element={<CreatePassword />} />

      <Route path="/" element={<Products />} />
      <Route path="/detail/:slug/" element={<ProductDetail />} />
      <Route path="/cart/" element={<Cart />} />
      <Route path="/checkout/:order_oid/" element={<Checkout />} />
      <Route path="/payment-success/:order_oid/" element={<PaymentSuccess />} />
      <Route path="/search" element={<Search />} />
    </Routes>
    <StoreFooter/>
      </BrowserRouter>

    </CartContext.Provider>
  )
}

export default App
