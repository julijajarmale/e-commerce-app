import React from 'react'
import { products } from "../data";
import Product from './Product';

function Products() {
  return (
    <>
    <h1 className='product-title'>Shop the look!</h1>
    <div  className="products-container">
    <div></div>

    {products.map( item => (
      <Product key={item.id} item ={item}/>
      ))}
    </div>
    </>
  )
}

export default Products
