import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";
import "./Product.css";

const Product = (props) => {
  const { img, name, seller, price, stock, key } = props.product;
  return (
    <div className="product">
      <div>
        <img src={img} alt="" />
      </div>
      <div>
        <h4 className="product-name">
          <Link to={"/product/" + key}>{name}</Link>
        </h4>
        <br />
        <p>
          <small>by: {seller}</small>
        </p>
        <p>${price}</p>
        <br />
        <p>
          <small>Only {stock} left in stock - Order Soon</small>
        </p>
        {props.showAddButton &&
          <button onClick={() => props.handleAddProduct(props.product)}>
            <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon> add to
            cart
          </button>
        }
      </div>
    </div>
  );
};

export default Product;
