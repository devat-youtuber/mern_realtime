import React, {useContext} from 'react'
import {DataContext} from '../../../GlobalState'
import ProductCard from '../../utils/productCard/ProductCard'

function Products() {
    const state = useContext(DataContext)
    const [products] = state.products

    
    return (
        <>
            <h2 className="app_title">
                    Realtime website ( chat, comments ... ) with MERN Stack and Socket.io
            </h2>
            <div className="products_page">
                
                {
                    products.map(product => (
                        <ProductCard key={product._id} product={product} />
                    ))
                }
            </div>
        </>
    )
}

export default Products
