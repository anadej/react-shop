import React from "react";
import ProductListItem from "./productListItem/ProductListItem";
import { PhoneListContainer } from "./ProductListStyled";

const ProductList = ({ products, addToCart }) => {
  return (
    <PhoneListContainer>
      {products.map((product) => (
        <ProductListItem
          product={product}
          key={product.id}
          addToCart={addToCart}
        />
      ))}
    </PhoneListContainer>
  );
};

export default ProductList;
