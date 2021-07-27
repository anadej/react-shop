import styled from "styled-components";

export const ProductListItemContainer = styled.li`
  width: 100%;
  padding: 20px;

  .content {
    /* width: 100%; */
    height: 100%;
    border: 1px solid ${(props) => props.colors.darkColors.secondary};
    border-radius: 14px;
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  .listItemTitle {
    font-size: 16px;
    text-align: center;
  }
  .imageWrapper {
    height: 130px;
    display: flex;
    justify-content: center;
    padding: 10px 0;
  }
  .listItemImage {
    height: 100%;
  }

  .productListItemSale {
    margin-top: 20px;
  }
  .productListItemName {
    font-weight: 700;
  }
  .productListItemDescription {
    flex-grow: 1;
    margin-top: 20px;
  }

  .priceTitle {
    text-align: center;
    font-size: 20px;
  }
  .withSalePrice {
    text-decoration: line-through;
    color: #dc143c;
  }
  .withoutSalePrice {
    font-weight: 600;
    color: #819ff5;
    font-size: 30px;
  }

  .productListItemButtonGroup {
    display: flex;
    align-items: center;
    width: 100%;
    margin-top: 20px;
  }
  .productListItemButtonGroup button {
    background-color: ${(props) => props.colors.darkColors.main};
    width: 50%;
    height: 30px;
    border: none;
    /* padding: 10px; */
    color: ${(props) => props.colors.darkColors.buttonText};
    text-transform: uppercase;

    &:hover {
      background-color: ${(props) => props.colors.darkColors.active};
    }
  }

  .addToCartButton {
    border-radius: 14px 0 0 14px;
    margin-right: 2px;
  }
  .detailsButton {
    border-radius: 0 14px 14px 0;
  }

  @media screen and (min-width: 768px) {
    width: 50%;
  }

  @media screen and (min-width: 1024px) {
    width: 25%;
  }
`;
