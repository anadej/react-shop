import React, { Component } from "react";
import { createNewAdv } from "../../services/api";
import { AdvFormContainer } from "./AdvFormStyled";
// import

const categories = ["phones", "laptops"];

const initialState = {
  name: "",
  image: "",
  description: "",
  price: 0,
  isSale: false,
  category: categories[0],
};

class AdvForm extends Component {
  state = { ...initialState };

  onHandleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === "checkbox") {
      return this.setState({ [name]: checked });
    }
    this.setState({ [name]: value });
  };

  onHandleSubmit = async (e) => {
    e.preventDefault();
    const response = await createNewAdv(this.state); //запрос на сервер - запись нового значения в базу данных
    this.props.addNewAdv({ ...this.state, id: response.data.name });
    this.setState({ ...initialState });
  };

  render() {
    const { name, image, description, price, isSale, category } = this.state;

    return (
      <AdvFormContainer>
        <form className="advForm" onSubmit={this.onHandleSubmit}>
          <div className="advFormContent">
            <div className="leftColumn">
              <label className="advFormLabel">
                Category:
                <select
                  name="category"
                  value={category}
                  className="advFormInput"
                  onChange={this.onHandleChange}
                >
                  {categories.map((category) => (
                    <option value={category} key={category}>
                      {category}
                    </option>
                  ))}
                </select>
              </label>
              <label className="advFormLabel">
                Name:
                <input
                  type="text"
                  name="name"
                  value={name}
                  className="advFormInput"
                  onChange={this.onHandleChange}
                />
              </label>
              <label className="advFormLabel">
                Image:
                <input
                  type="text"
                  name="image"
                  value={image}
                  className="advFormInput"
                  onChange={this.onHandleChange}
                />
              </label>
            </div>
            <div className="rightColumn">
              <label className="advFormLabel">
                Description:
                <input
                  type="text"
                  name="description"
                  value={description}
                  className="advFormInput"
                  onChange={this.onHandleChange}
                />
              </label>
              <label className="advFormLabel">
                Price:
                <input
                  type="number"
                  name="price"
                  value={price}
                  className="advFormInput"
                  onChange={this.onHandleChange}
                />
              </label>
              <label className="advFormLabelCheckBox">
                isSale:
                <input
                  type="checkbox"
                  name="isSale"
                  checked={isSale}
                  className="advFormCheckBox"
                  onChange={this.onHandleChange}
                />
              </label>
            </div>
          </div>
          <button type="submit" className="submitButton">
            Add product
          </button>
        </form>
      </AdvFormContainer>
    );
  }
}

export default AdvForm;
