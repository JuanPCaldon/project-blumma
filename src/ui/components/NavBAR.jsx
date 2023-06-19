import React from 'react'
import { Link } from 'react-router-dom'

export const Navbar = () => {
  return (
    <nav className='navbar_principal'>


      <div className='narvar_primario'>
            <Link className='links_navbar_logo'
            to='/Home'
            > Blumma

            </Link>

            <Link className='links_navbar'
            to='/Home'
            > 
            Home
            </Link>

            <Link className='links_navbar'
            to='/shop'
            > 
            Shop
            </Link>

            <Link className='links_navbar'
            to='/news'
            > 
            News
            </Link>

            

            <Link className='links_navbar'
            to='/about'
            > 
            About Us
            </Link>


            <Link className='links_navbar'
            to='/contact'
            > 
            Contact Us
            </Link>
      </div>


      <div className='navbar_secundario'>
            <Link className='links_navbar'
            to='/login'
            > 
            Login
            </Link>


            <Link className='links_navbar'
            to='/Search'
            > 
            Search
            </Link>


            <Link className='links_navbar'
            to='/shoppingcar'
            > 
            Car
            </Link>
            <span> contador #</span>

      </div>
     
    
    </nav>
  )
}
