import React from 'react'
import { Listproducts } from '../components/Listproducts'

export const Home = () => {



  return (
    <>

     

        <section className='grid_home_1'>

            <div className='grid_1'>

             <h2 className='titulo_grid_1'> Discover Our Collection  </h2>

            </div>

            <div className='grid_2'>

              <h2 className='titulo_grid_2'> Necklaces </h2>

            </div>

            <div className='grid_3'>

              <h2 className='titulo_grid_3'>  Rings </h2>


            </div>

        </section>

        <section className='section_blumma'>

          <div className='logo_blumma'>

           

           
          </div>


        </section>

        <hr className='separador_1' />


        <section className='recent_arrivals'>

          <h1> Recent arrivals </h1>

          <Listproducts categoria={'recent'} />

        </section>
        <hr />

        <section className='publicidad'>
        </section>


        <section className='Best Sellers'>
          <h1>Best Selllers</h1>
          
          
             <Listproducts categoria={'best'} />


        </section>

        <hr />


        <section className='Signup for our newsletter'>

          <form action="">
                <input type="text" name="" id="" placeholder='Your E-mail' />
          </form>

        </section>
        

        <footer>
            <p> Juan caldon Developer </p>
        

        </footer>
    
    
    </>
   
  )
}
