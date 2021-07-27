import React from "react";
import colors from "../styles/colors";
import { SectionContainer } from "./SectionStyled";

const Section = ({ children, title }) => {
  return (
    <SectionContainer colors={colors}>
      <h2 className="sectionTitle">{title.toUpperCase()}</h2>
      {children}
    </SectionContainer>
  );
};

export default Section;
