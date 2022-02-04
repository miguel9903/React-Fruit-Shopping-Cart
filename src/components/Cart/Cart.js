import { Component } from "react";
import BubbleAlert from "../BubbleAlert";
import CartDetail from "../CartDetail";
import "./styles.css";

class Cart extends Component {
  render() {
    const { cart, cartIsVisible, showCart } = this.props;
    const quantity = cart.reduce(
      (total, product) => total + product.quantity,
      0
    );
    return (
      <div className="cart">
        {quantity !== 0 && <BubbleAlert cartNumber={quantity} />}
        <button className="cart__button" onClick={showCart}>Cart</button>
        { cartIsVisible && <CartDetail cart={cart} /> }
      </div>
    );
  }
}

export default Cart;
