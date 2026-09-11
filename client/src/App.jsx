import React from 'react'
import {Routes, Route, BrowserRouter} from 'react-router-dom'
import Home from './pages/Home'
import Cart from './pages/Cart'
import Login from './pages/Login'
import Products from './pages/Products'
import Register from './pages/Register'
import ProductDetails from './pages/ProductDetails'
import MainLayout from './layouts/MainLayout'

const App = () => {
  return (
    <BrowserRouter > 
    <Routes element={< MainLayout />}>
    
      <Route path="/" element={<Home />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/login" element={<Login />} />
      <Route path="/products" element={<Products />} />
      <Route path="/register" element={<Register />} />
      <Route path="/product/:id" element={<ProductDetails />} />

    </Routes>
    </BrowserRouter>
   
  )
}

export default App
