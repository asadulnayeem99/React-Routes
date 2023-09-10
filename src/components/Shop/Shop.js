import React, { useState } from "react";
import Cart from "../Cart/Cart";
import Product from "../Product/Product";
import fakeData from "../fakeData/products.json";
import "./Shop.css";

const Shop = () => {
  const first10 = fakeData.slice(0, 10);
  const [products, setProducts] = useState(first10);
  const [cart, setCart] = useState([]);
  const handleAddProduct = (product) => {
    const newCart = [...cart, product];
    setCart(newCart);
  };
  //    console.log(fakeData);
  return (
    <div className="shop-container">
      <div className="product-container">
        <ul>
          {products.map((product) => (
            <Product
            showAddButton={true}
              handleAddProduct={handleAddProduct}
              product={product}
            ></Product>
          ))}
        </ul>
      </div>
      <div className="cart-container">
        <Cart cart={cart}></Cart>
      </div>
    </div>
  );
};

export default Shop;
