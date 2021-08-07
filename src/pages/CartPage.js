import CartList from "../components/cartList/CartList";
import Section from "../components/Section";

const CartPage = () => {
  return (
    <Section title={"Корзина"}>
      <CartList />
    </Section>
  );
};

export default CartPage;
