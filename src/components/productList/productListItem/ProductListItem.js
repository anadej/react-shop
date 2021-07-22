import React from "react";
import colors from "../../../styles/colors";
import { ProductListItemStyled } from "./ProductListItemStyled";

const ProductListItem = ({ product, addToCart }) => {
  const { id, name, image, description, isSale, price } = product;

  const addProduct = () => {
    addToCart({ name, price, id, quantity: 1 });
  };

  return (
    <ProductListItemStyled colors={colors}>
      <div className="productListItemWrappers">
        <h3 className="productListItemTitle">{name}</h3>
        <img src={image} alt={name} className="productListItemImg" />
        <p className="productListItemSale">
          <span className="productListItemName">Sale:</span>{" "}
          {isSale ? "Действует акционная цена" : "В акции не учавствует"}
        </p>
        <p className="productListItemDescription">
          <span className="productListItemName">Descriptions</span>
          {description}
        </p>
        {/* <ul>
          {product.colors.map((color) => (
            <li key={color}>{color}</li>
          ))}
        </ul> */}
        <p className="productListItemPrice">
          <span className="productListItemName">Price:</span>{" "}
          <span>{price}</span>
        </p>
        <div className="productListItemButtonGroup">
          <button
            type="button"
            className="addToCartButton"
            onClick={addProduct}
          >
            Add to cart
          </button>
          <button type="button" className="detailsButton">
            Details
          </button>
        </div>
      </div>
    </ProductListItemStyled>
  );
};

export default ProductListItem;
