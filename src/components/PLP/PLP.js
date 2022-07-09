import React from 'react'

import { useState, useEffect } from 'react'
import { commerce } from '../../lib/commerce'
import Products from '../Products/Products'

const PLP = () => {
  const [products, setProducts] = useState([]);

  const fetchProduct = async () => {
    const response = await commerce.products.list();
    setProducts((response && response.data) || []);
  };

  useEffect(() => {
    fetchProduct();
  }, []);

  console.log({ products });

  return (
    <div>
    PLP
        <Products products={products}/>
    </div>
  )
}

export default PLP