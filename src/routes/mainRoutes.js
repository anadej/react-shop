import AdminPage from "../pages/AdminPage";
import AuthPage from "../pages/AuthPage";
import CartPage from "../pages/CartPage";
import HomePage from "../pages/HomePage";
import ProductsPage from "../pages/ProductsPage";

export const mainRoutes = [
  {
    name: { en: "Home", ru: "Главная" },
    path: "/",
    component: HomePage,
    exact: true,
  },
  {
    name: { en: "Products", ru: "Продукты" },
    path: "/products",
    component: ProductsPage,
    exact: false,
  },
  {
    name: { en: "Cart", ru: "Корзина" },
    path: "/cart",
    component: CartPage,
    exact: true,
  },
  {
    name: { en: "Administration", ru: "Администрация" },
    path: "/admin",
    component: AdminPage,
    exact: true,
  },
  // {
  //   name: { en: "Registration", ru: "Регистрация" },
  //   path: "/registration",
  //   component: AuthPage,
  //   exact: true,
  // },
  {
    name: { en: "Login", ru: "Логин" },
    path: "/login",
    component: AuthPage,
    exact: true,
  },
];
