import { useState } from 'react'
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


function App() {
  const [count, setCount] = useState(0)

  return (
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
    </Routes>
    <StoreFooter/>
  </BrowserRouter>
  )
}

export default App
