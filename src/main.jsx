import React from 'react'
import ReactDOM from 'react-dom/client'

import {BrowserRouter} from 'react-router-dom'
import { BlummaApp } from './BlummaApp'
import './styles.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    
    <BrowserRouter>
        
        <BlummaApp/>
    
    </BrowserRouter>
    
   
  </React.StrictMode>,
)
