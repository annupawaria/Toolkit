import React from 'react'
import Header from './components/Header'
import Product from './components/Product'
import { Outlet } from 'react-router-dom'
import './App.css'
import CartItem from './components/CartItem'
// import Home from './components/Product'

const App = () => {
  return (
    <div>
      <Header />
      {/* <Product/> */}
      {/* <CartItem/> */}
      {/* <Home/> */}

      <Outlet />
    </div>

  )
}

export default App