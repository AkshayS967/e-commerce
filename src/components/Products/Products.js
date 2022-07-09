import React from 'react'
import './Products.css'

const Products = ({ products }) => {
  return (
    <div className='product'>
        {products.map((product) => {
            return (
            <div>
                <ul>
                  <li>
                    <img className='product-image' src='{product.image.url}' alt='product' />
                    {/* <h3>{product.image.url}</h3> */}
                    <h3>{product.name}</h3>
                    <p>{product.price.formatted}</p>
                  </li>
                </ul>

            </div>  
            );
        })}
    </div>
  )
}

export default Products