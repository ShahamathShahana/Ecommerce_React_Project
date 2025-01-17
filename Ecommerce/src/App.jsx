import React from 'react'
import Header from './Components/Header'
import Home from './Pages/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Category from './Pages/Category'
import Cart from './Pages/Cart'
import Product from './Pages/Product'
import Login from './Pages/Login'
import Footer from './Components/Footer'

const App = () => {
  return (
  <main className='bg-primary text-tertiary'>
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/mens' element={<Category/>}/>
      <Route path='/womens' element={<Category/>}/>
      <Route path='/kids' element={<Category/>}/>
      <Route path='/product' element={<Product/>}/>
        <Route path=':productId' element={<Product/>}></Route>
      <Route path='/cart-page' element={<Cart/>}/>
      <Route path='/login' element={<Login/>}/>

    </Routes>
    <Footer/>
    </BrowserRouter>
  </main>
  )
}

export default App
