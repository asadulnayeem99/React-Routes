import React, { useState } from 'react';
import Product from '../Product/Product';
import fakeData from '../fakeData/products.json';
import "./Shop.css";
 
const Shop = () => {
    const first10 = fakeData.slice(0,10);
    const [products,setProducts] = useState(first10)
//    console.log(fakeData);
    return (
      <div className="shop-container">
        <div className="product-container">
          <ul>
            {products.map((product) => (
              <Product product={product}></Product>
            ))}
          </ul>
        </div>
        <div className="cart-container">
          <h3>Cart Container</h3>
        </div>
      </div>
    );
};

export default Shop;