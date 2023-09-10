import React from "react";
import { useParams } from "react-router-dom";
import Product from "../Product/Product";
import fakeData from "../fakeData/products";
const ProductDetail = () => {
  const { productKey } = useParams();
  const product = fakeData.find((pd) => pd.key === productKey);
  console.log(product);
  return (
    <div>
      <h1>{productKey} Coming Soon Details....................</h1>
      <Product showAddButton={false} product={product}></Product>
    </div>
  );
};

export default ProductDetail;
