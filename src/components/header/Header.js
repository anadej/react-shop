import React, { Component } from "react";
import colors from "../../styles/colors";
import HeaderList from "./headerList/HeaderList";
import { HeaderContainer } from "./HeaderStyled";
import sprite from "../../icons/header/header.svg";
import Modal from "../modal/Modal";

class Header extends Component {
  state = {
    width: window.innerWidth,
    breakPoint: 768,
    isModalOpen: false,
  };

  componentDidMount() {
    window.addEventListener("resize", this.handleResizeWindow);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.handleResizeWindow);
  }

  handleResizeWindow = () => this.setState({ width: window.innerWidth });

  setModalState = () => {
    this.setState((prev) => ({ isModalOpen: !prev.isModalOpen }));
  };

  render() {
    const { width, breakPoint, isModalOpen } = this.state;
    return (
      <>
        <HeaderContainer colors={colors}>
          <h2 className="headerLogo">Logo</h2>
          {width > breakPoint ? (
            <nav>
              <HeaderList data={this.props.data} />
            </nav>
          ) : (
            <svg className="burgerMenu" onClick={this.setModalState}>
              <use href={sprite + "#icon-menu_40px"} />
            </svg>
          )}
        </HeaderContainer>
        {isModalOpen && (
          <Modal hideModal={this.setModalState}>
            <HeaderList data={this.props.data} />
          </Modal>
        )}
      </>
    );
  }
}

export default Header;
