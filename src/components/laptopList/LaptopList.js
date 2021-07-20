import React from "react";
import Section from "../Section";
import LaptopListItem from "./laptopListItem/LaptopListItem";

const LaptopList = ({ laptops }) => {
  return (
    <Section title="Ноутбуки">
      <ul>
        {laptops.map((laptop) => (
          <LaptopListItem laptop={laptop} key={laptop.id} />
        ))}
      </ul>
    </Section>
  );
};

export default LaptopList;
