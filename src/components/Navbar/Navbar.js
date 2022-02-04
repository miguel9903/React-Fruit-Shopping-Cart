import { Component } from "react";
import Logo from "../Logo";
import Cart from "../Cart";
import "./styles.css";

class Navbar extends Component {
  render() {
    const { cart, showCart, cartIsVisible } = this.props;
    return (
      <nav className="navbar">
        <Logo />
        <Cart cart={cart} cartIsVisible={cartIsVisible} showCart={showCart} />
      </nav>
    );
  }
}

export default Navbar;
