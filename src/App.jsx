import { useState } from 'react'
import './App.css'
import Header from './layout/Header'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Products from './pages/Produtcs'
import ProductDetails from './pages/ProductDetails'
import Basket from './pages/Basket'
import Footer from './layout/Footer'
import Tech from './pages/Tech'
import Man from './pages/Man'
import Woman from './pages/Woman'
import Accessory from './pages/Accessory'
import Popular from './pages/Popular'


function App() {


  return (
    <div>
      <Header />
      <div className='route-wrap'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/products' element={<Products />} />
          <Route path='/popular' element={<Popular />} />
          <Route path='/product-details/:id' element={<ProductDetails />} />
          <Route path='/basket' element={<Basket />} />
          <Route path='/tech' element={<Tech/>} />
          <Route path='/man' element={<Man />} />
          <Route path='/woman' element={<Woman />} />
          <Route path='/accessory' element={<Accessory />} />
        </Routes>
      </div>
      <Footer />
    </div>
  )
}

export default App
