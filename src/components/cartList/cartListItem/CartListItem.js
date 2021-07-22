import React from "react";

const CartListItem = ({
  id,
  name,
  price,
  quantity,
  removeFromCart,
  addItem,
  removeItem,
}) => {
  const removeProduct = () => {
    removeFromCart(id);
  };

  const addQuantity = () => {
    addItem(id);
  };

  const removeQuantity = () => {
    removeItem(id);
  };

  return (
    <li>
      <h3 className="cartListItemTitle">{name}</h3>
      <p className="cartListItemPrice">{price}</p>
      <div className="cartListItemCount">
        <button
          type="button"
          disabled={quantity === 1}
          onClick={removeQuantity}
        >
          -
        </button>
        <p className="cartListItemQuantity">{quantity}</p>
        <button type="button" onClick={addQuantity}>
          +
        </button>
        <button type="button" onClick={removeProduct}>
          X
        </button>
      </div>
    </li>
  );
};

export default CartListItem;
