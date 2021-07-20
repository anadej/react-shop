import React from "react";
import data from "../../data/index";
import LaptopList from "../laptopList/LaptopList";
import PhoneList from "../phoneList/PhoneList";

const Main = () => {
  return (
    <>
      <PhoneList phones={data.phones} />
      <LaptopList laptops={data.laptops} />
    </>
  );
};

export default Main;
