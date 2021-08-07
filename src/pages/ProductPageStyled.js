import styled from "styled-components";

const ProductPageStyled = styled.div`
  .navigationList {
    display: flex;
    justify-content: center;
    align-items: center;
    border-bottom: 3px solid ${(props) => props.colors.darkColors.main};
    background-color: ${(props) => props.colors.darkColors.primary};

    list-style: none;
    padding-top: 10px;
  }
  .navigationListItem {
    margin-right: 20px;
  }
  .navigationListItemAnchor {
    text-decoration: none;
    color: #819ff5;
    text-transform: uppercase;
    &:hover {
      color: #5f73a1;
    }
  }
  .activeNavigationListItemAnchor {
    color: #5f73a1;
  }
`;

export default ProductPageStyled;
