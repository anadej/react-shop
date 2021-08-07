import React from "react";
import { connect } from "react-redux";
import { removeFromCart } from "../../redux/cart/cartAction";
import CartListItem from "./cartListItem/CartListItem";
import { CartListContainer, CartListContainerWrapper } from "./CartListStyled";

const CartList = ({
  cart,
  removeFromCart,
  removeAllFromCart,
  addItem,
  removeItem,
}) => {
  const getTotalPrice = () =>
    cart.reduce((acc, product) => {
      acc += product.price;
      return acc;
    }, 0);

  return (
    <CartListContainerWrapper>
      {cart.length ? (
        <>
          <CartListContainer>
            {cart.map((product) => (
              <CartListItem
                {...product}
                key={product.id}
                removeFromCart={removeFromCart}
                addItem={addItem}
                removeItem={removeItem}
              />
            ))}
          </CartListContainer>
          <div className="totalInfo">
            <p className="totalInfoTitle">Общая сумма заказа:</p>
            <p className="totalInfoPrice">
              {getTotalPrice()} <span className="totalInfoTitle">грн</span>
            </p>
          </div>
          <button
            type="button"
            onClick={removeAllFromCart}
            className="orderButton"
          >
            Оформить заказ
          </button>
        </>
      ) : (
        <p>Добавьте товар в корзину</p>
      )}
    </CartListContainerWrapper>
  );
};

const mapStateToProps = (state) => ({
  cart: state.cart.items,
});

export default connect(mapStateToProps, { removeFromCart })(CartList);
