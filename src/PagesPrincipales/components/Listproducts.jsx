import React from 'react'
import { getProductsbyId } from '../helpers/getProductsbyId'
import { ProductCard } from './ProductCard'


export const Listproducts = ({categoria}) => {

   const productos = getProductsbyId(categoria)
  return (
    <div className='listproducts'>
        {   productos.map(categoria =>(

            <ProductCard 
                key={categoria.id}
                 {...categoria }        
                        
                        /> 
        ))

        }
    
    </div>
  )
}
