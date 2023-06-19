import { productos } from "../../data/productos";


export const getProductsbyId = (categoria) =>{

    return productos.filter(producto => producto.categoria == categoria )

    
}