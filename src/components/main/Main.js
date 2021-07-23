import React from "react";
import data from "../../data/index";
import AdvForm from "../admin/AdvForm";
import CartList from "../cartList/CartList";
import ProductList from "../productList/ProductList";
import Section from "../Section";
import { MainStyled } from "./MainStyled";

class Main extends React.Component {
  state = {
    cart: [],
    ...data,
  };

  addNewAdv = (product) => {
    this.setState((prev) => ({
      [product.category]: [...prev[product.category], product],
    }));
  };

  addToCart = (product) => {
    if (this.state.cart.some((cartItem) => cartItem.id === product.id)) {
      this.setState((prev) => ({
        cart: prev.cart.map((cartItem) =>
          cartItem.id === product.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        ),
      }));
      return;
    }
    this.setState((prev) => ({
      cart: [...prev.cart, product],
    }));
  };

  removeFromCart = (id) => {
    this.setState((prev) => ({
      cart: prev.cart.filter((product) => product.id !== id),
    }));
  };

  removeAllFromCart = () => {
    this.setState({ cart: [] });
  };

  addItem = (id) => {
    this.setState((prev) => ({
      cart: prev.cart.map((cartItem) =>
        cartItem.id === id
          ? { ...cartItem, quantity: cartItem.quantity + 1 }
          : cartItem
      ),
    }));
  };

  removeItem = (id) => {
    this.setState((prev) => ({
      cart: prev.cart.map((cartItem) =>
        cartItem.id === id
          ? { ...cartItem, quantity: cartItem.quantity - 1 }
          : cartItem
      ),
    }));
  };

  render() {
    return (
      <MainStyled>
        <Section title={"Администрирование"}>
          <AdvForm addNewAdv={this.addNewAdv} />
        </Section>
        <Section title={"Корзина"}>
          <CartList
            cart={this.state.cart}
            removeFromCart={this.removeFromCart}
            removeAllFromCart={this.removeAllFromCart}
            addItem={this.addItem}
            removeItem={this.removeItem}
          />
        </Section>
        <Section title={"Мобильные телефоны"}>
          <ProductList
            products={this.state.phones}
            addToCart={this.addToCart}
          />
        </Section>
        <Section title={"Ноутбуки"}>
          <ProductList
            products={this.state.laptops}
            addToCart={this.addToCart}
          />
        </Section>
      </MainStyled>
    );
  }
}

export default Main;
