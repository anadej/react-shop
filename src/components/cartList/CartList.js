import React from "react";
import CartListItem from "./cartListItem/CartListItem";

const CartList = ({
  cart,
  removeFromCart,
  removeAllFromCart,
  addItem,
  removeItem,
}) => {
  return (
    <>
      {cart.length ? (
        <>
          <ul className="cartList">
            {cart.map((product) => (
              <CartListItem
                {...product}
                key={product.id}
                removeFromCart={removeFromCart}
                addItem={addItem}
                removeItem={removeItem}
              />
            ))}
          </ul>
          <button type="button" onClick={removeAllFromCart}>
            Оформить заказ
          </button>
        </>
      ) : (
        <p>Добавьте товар в корзину</p>
      )}
    </>
  );
};

export default CartList;
