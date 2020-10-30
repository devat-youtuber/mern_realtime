import React from 'react'
import {Link} from 'react-router-dom'
import './ProductCard.css'

function ProductCard({product}) {
    return (
        <div className="product_card">
            <img src={product.images.url} alt=""/>
            <h3>{product.title}</h3>
            <span>$ {product.price}</span>
            <p>{product.description}</p>
            <div className="product_card_row">
                <Link to={`/product/${product._id}`}>View</Link>
                <button>Buy</button>
            </div>
        </div>
    )
}

export default ProductCard
