import React from "react";

const Cart = (props) => {
  const cart = props.cart;
  //   const total = cart.reduce((total, prd) => total + prd.price, 0);

  let total = 0;
  for (let i = 0; i < cart.length; i++) {
    const product = cart[i];
    total = (total + product.price);
  }
  let shipping = 0;
  if (total > 35) {
    shipping = 4.99;
  } else if (total > 15) {
    shipping = 15.99;
  }
  const tax = (total / 10);
  const grandTotal = (total + shipping + Number(tax)).toFixed(2)
  const formatNum = (num) =>{
    const fixed = num.toFixed(2);
    return Number(fixed)
  }
  return (
    <div>
      <h4>Order Summary :</h4>
      <h4>Items Ordered: {cart.length}</h4>
      <p>
        <small>Tax + Vat : {formatNum(tax)}</small>
      </p>
      <p>Product Price: {grandTotal}</p>
      <p>
        <small>Shipping Cost : {shipping}</small>
      </p>
      <p>Total Pricec: {grandTotal}</p>
    </div>
  );
};

export default Cart;
