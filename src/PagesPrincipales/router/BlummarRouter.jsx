import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { Navbar } from '../../ui/components/NavBAR'
import { AboutUs } from '../pages/AboutUs'
import { ContactUs } from '../pages/ContactUs'
import { Home } from '../pages/Home'
import { News } from '../pages/News'
import { Search } from '../pages/Search'
import { Shop } from '../pages/Shop'
import { Shoppingcard } from '../pages/Shoppingcard'


export const BlummarRouter = () => {
  return (
    <>

            <Navbar/> 

            <Routes>

            <Route path='/' element={<Navigate to="/Home"/>} />
            <Route path='/about' element={<AboutUs/>} />
            <Route path='/Home' element={<Home/>} />
            <Route path='/contact' element={<ContactUs/>} />
           
            <Route path='/news' element={<News/>} />
            <Route path='/Search' element={<Search/>} />
            <Route path='/shop' element={<Shop/>} />
            <Route path='/shoppingcar' element={<Shoppingcard/>} />




            </Routes>
    
    </>
  )
}
