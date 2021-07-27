import React from "react";
import { CartListItemContainer } from "./CartListItemStyled";
import sprite from "../../../icons/product/products.svg";

const CartListItem = ({
  id,
  name,
  price,
  quantity,
  removeFromCart,
  addItem,
  removeItem,
}) => {
  const removeProduct = () => removeFromCart(id);

  const addQuantity = () => {
    addItem(id);
  };

  const removeQuantity = () => {
    removeItem(id);
  };

  return (
    <CartListItemContainer>
      <p className="cartItemName">{name}</p>
      <p className="cartPrice">{price}</p>
      <div className="cartItemOptions">
        <button
          type="button"
          disabled={quantity === 1}
          onClick={removeQuantity}
        >
          -
        </button>
        <p className="cartItemQuantity">{quantity}</p>
        <button type="button" onClick={addQuantity}>
          +
        </button>
        <div className="iconContainer" onClick={removeProduct}>
          <svg className="iconBin">
            <use href={sprite + "#icon-bin"} />
          </svg>
        </div>
      </div>
    </CartListItemContainer>
  );
};

export default CartListItem;
