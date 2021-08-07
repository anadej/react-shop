import React, { Component } from "react";
import ProductListItem from "./productListItem/ProductListItem";
import { ProductListContainer } from "./ProductListStyled";
import { connect } from "react-redux";
// import { getAllAdvByCategory } from "../../services/api";
// import { getLaptops, getPhones } from "../../redux/product/productAction";
import { getAllAdvByCategoryOperation } from "../../redux/product/productsOperations";

class ProductList extends Component {
  async componentDidMount() {
    await this.props.getAllAdvByCategoryOperation(this.props.category); //выдает данные выбранной категории
    // this.props.category === "laptops" && this.props.getLaptops(res);
    // this.props.category === "phones" && this.props.getPhones(res);
  }

  render() {
    return (
      <ProductListContainer>
        {this.props.products.map((product) => (
          <ProductListItem
            product={product}
            key={product.id}
            addToCart={this.props.addToCart}
          />
        ))}
      </ProductListContainer>
    );
  }
}

const mapStateToProps = (state, props) => ({
  category: props.location.state.category,
  products: state.products.items[props.location.state.category],
});

export default connect(mapStateToProps, {
  // getLaptops: getLaptops,
  // getPhones: getPhones,
  getAllAdvByCategoryOperation,
})(ProductList);
