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
import Account from './views/customer/Account';
import PrivateRoute from './layout/PrivateRoute';
import MainWrapper from './layout/MainWrapper';
import Orders from './views/customer/Orders';
import OrderDetail from './views/customer/OrderDetail';
import Wishlist from './views/customer/Wishlist';
import CustomerNotification from './views/customer/CustomerNotification';
import CustomerSettings from './views/customer/Settings';
import Invoice from './views/customer/Invoice';


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
          <MainWrapper>
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

              {/* Customer Routs */}
              <Route path="/customer/account/" element={<PrivateRoute><Account /></PrivateRoute>} />
              <Route path="/customer/orders/" element={<PrivateRoute><Orders /></PrivateRoute>} />
              <Route path="/customer/orders/:order_oid/" element={<PrivateRoute><OrderDetail /></PrivateRoute>} />
              <Route path="/customer/wishlist/" element={<PrivateRoute><Wishlist /></PrivateRoute>} />
              <Route path="/customer/notifications/" element={<PrivateRoute><CustomerNotification /></PrivateRoute>} />
              <Route path="/customer/settings/" element={<PrivateRoute><CustomerSettings /></PrivateRoute>} />
              <Route path="/customer/invoice/:order_oid/" element={<PrivateRoute><Invoice /></PrivateRoute>} />

            </Routes>
          </MainWrapper>
        <StoreFooter/>
      </BrowserRouter>

    </CartContext.Provider>
  )
}

export default App
