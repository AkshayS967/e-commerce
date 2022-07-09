import React from 'react'
import './Cart.css'

const Cart = () => {
  return (
    <div className='cart'>
      <h2>Shopping Cart</h2>
      <table>
        <tr>
          <th>Product</th>
          <th>Price</th>
          <th>Quantity</th>
          <th>Total</th>
          <th>Delete</th>
        </tr>
        <tr>
          <td>Product1</td>
          <td>Price1</td>
          <td>Quantity1</td>
          <td>Total1</td>
          <td>Delete1</td>
        </tr>
        <tr>
          <td>Product1</td>
          <td>Price1</td>
          <td>Quantity1</td>
          <td>Total1</td>
          <td>Delete1</td>
        </tr>
      </table>
    </div>
  )
}

export default Cart