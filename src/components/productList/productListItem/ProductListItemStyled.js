import styled from "styled-components";

export const ProductListItemStyled = styled.li`
  width: 100%;
  padding: 10px;
  .productListItemWrappers {
    width: 100%;
    height: 100%;
    border: 1px solid ${(props) => props.colors.darkColors.secondary};
    border-radius: 14px;
    padding: 20px;
    display: flex;
    flex-direction: column;
  }
  .productListItemTitle {
    text-align: center;
  }
  .productListItemImg {
    height: 200px;
    object-fit: contain;
    margin-top: 20px;
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
  .productListItemPrice {
    margin-top: 20px;
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
