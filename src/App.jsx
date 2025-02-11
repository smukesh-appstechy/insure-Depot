import { useState } from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Home from './Components/Homepage/Home';
import Products from './Components/Nested-pages/Products/Products'
import Blog from './Components/Nested-pages/Blog/Blog'
import About from './Components/Nested-pages/About-us/About'
import HowItWorks from './Components/Nested-pages/How-It-Workes/HowItWorks';
import BlogDetailPage from './Components/Nested-pages/Blog/BlogDetailPage';

function App() {

  return (
    <>
     <BrowserRouter>
     <Header/>
     <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/Products" element={<Products/>}/>
      <Route path='/Blog' element={<Blog/>}/>
      <Route path='/About-us' element={<About/>}/>
      <Route path='/How-it-work' element={<HowItWorks/>}/>
      <Route path='/blogs/:id' element={<BlogDetailPage/>}/>
     </Routes>
     <Footer/>
     </BrowserRouter>
    </>
  )
}

export default App
