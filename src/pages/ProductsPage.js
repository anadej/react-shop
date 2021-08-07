import { NavLink, Route, Switch } from "react-router-dom";
// import ProductList from "../components/productList/ProductList";
// import Section from "../components/Section";
import colors from "../styles/colors";
import { productsRoutes } from "../routes/productsRoutes";
import ProductPageStyled from "./ProductPageStyled";

const ProductsPage = ({ match }) => {
  return (
    <ProductPageStyled colors={colors}>
      <nav>
        <ul className="navigationList">
          {productsRoutes.map((route) => (
            <li className="navigationListItem" key={route.path}>
              <NavLink
                className="navigationListItemAnchor"
                activeClassName="activeNavigationListItemAnchor"
                to={{
                  pathname: match.url + route.path,
                  state: { category: route.category },
                }}
                exact={route.exact}
              >
                {route.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
      <Switch>
        {productsRoutes.map((route) => (
          <Route
            path={match.path + route.path}
            exact={route.exact}
            component={route.component}
            key={route.path}
          />
        ))}
      </Switch>
    </ProductPageStyled>
  );
};

export default ProductsPage;
