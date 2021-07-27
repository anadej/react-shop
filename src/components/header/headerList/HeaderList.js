import React from "react";
import { HeaderListStyled } from "./HeaderListStyled";

const HeaderList = ({ data }) => {
  return (
    <HeaderListStyled>
      <ul className="navigationList">
        {data.map((headerItem) => (
          <li key={headerItem} className="navigationListItem">
            <a href={`${headerItem}`} className="navigationListItemAnchor">
              {headerItem}
            </a>
          </li>
        ))}
      </ul>
    </HeaderListStyled>
  );
};

export default HeaderList;
