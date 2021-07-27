import React from "react";
import colors from "../../../styles/colors";
import { ProductListItemContainer } from "./ProductListItemStyled";

const ProductListItem = ({ product, addToCart }) => {
  const { id, name, image, description, isSale, price } = product;

  const addProduct = () => {
    addToCart({ name, price, id, quantity: 1 });
  };

  return (
    <ProductListItemContainer colors={colors}>
      <div className="content">
        <h3 className="listItemTitle">{name}</h3>
        <div className="imageWrapper">
          <img src={image} alt={name} className="listItemImage " />
        </div>
        <p className="productListItemSale">
          <span className="productListItemName">Sale:</span>{" "}
          {isSale ? "Действует акционная цена" : "В акции не учавствует"}
        </p>
        <p className="productListItemDescription">
          <span className="productListItemName">Description: </span>
          {description}
        </p>
        <p className="priceTitle">
          {isSale ? (
            <>
              <span className="withSalePrice"> {price}</span>{" "}
              <span className="withoutSalePrice">
                {(price - price / 10).toFixed(0)}
              </span>
            </>
          ) : (
            <span className="withoutSalePrice">{price}</span>
          )}
        </p>
        <div className="productListItemButtonGroup">
          <button
            type="button"
            className="addToCartButton"
            onClick={addProduct}
          >
            Buy
          </button>
          <button type="button" className="detailsButton">
            Details
          </button>
        </div>
      </div>
    </ProductListItemContainer>
  );
};

export default ProductListItem;
