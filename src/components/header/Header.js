import React from "react";
import colors from "../../styles/colors";
import HeaderList from "./headerList/HeaderList";
import { HeaderSyled } from "./HeaderStyled";

const Header = () => {
  return (
    <HeaderSyled colors={colors}>
      <h2 className="headerLogo">Logo</h2>
      <nav>
        <HeaderList />
      </nav>
    </HeaderSyled>
  );
};

export default Header;
