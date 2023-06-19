import React from 'react'
import {Routes, Route,Navigate} from 'react-router-dom'
import { Login } from '../PagesPrincipales/Login'
import { BlummarRouter } from '../PagesPrincipales/router/BlummarRouter'

import { Navbar } from '../ui/components/NavBAR'



export const AppRouter = () => {
  return (
    <>
      
     

        <Routes>

      
          <Route path='/login' element={<Login/>} />
          <Route path='/*' element={<BlummarRouter/>} />
    

  
        </Routes>

    
    
    
    
    </>
  )
}
