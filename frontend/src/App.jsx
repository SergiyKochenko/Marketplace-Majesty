import { useState } from 'react'
import { Route, Routes, BrowserRouter } from 'react-router-dom';

import Register from './views/auth/register';

import Login from './views/auth/login'

import Dashboard from './views/auth/dashboard';

import Logout from './views/auth/logout';

function App() {
  const [count, setCount] = useState(0)

  return (
  <BrowserRouter>
    <Routes>
      <Route path='/login' element={<Login />} />
      <Route path='/register' element={<Register />} />
      <Route path='/logout' element={<Logout />} />
      <Route path='/' element={<Dashboard />} />
    </Routes>
  </BrowserRouter>
  )
}

export default App
