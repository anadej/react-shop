import React from "react";
import { NavLink } from "react-router-dom";
import { mainRoutes } from "../../../routes/mainRoutes";
import { HeaderListStyled } from "./HeaderListStyled";

const HeaderList = ({ language = "en" }) => {
  return (
    <HeaderListStyled>
      <ul className="navigationList">
        {mainRoutes.map((route) => (
          <li className="navigationListItem" key={route.path}>
            <NavLink
              to={route.path}
              className="navigationListItemAnchor"
              activeClassName="activeNavigationListItemAnchor"
              exact={route.exact}
            >
              {route.name[language]}
            </NavLink>
          </li>
        ))}
      </ul>
    </HeaderListStyled>
  );
};

export default HeaderList;
