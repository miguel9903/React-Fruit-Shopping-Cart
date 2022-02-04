import { Component } from "react";
import "./styles.css";

class CartDetail extends Component {
  render() {
    const { cart } = this.props;
    return (
      <div className="cart-detail">
        <ul className="cart-list">
          {cart.map((product) => (
            <li className="cart-list__item" key={product.id}>
              <img
                className="cart-list__image"
                src={product.image}
                alt={product.name}
              />
              <span className="cart-list__name">{product.name}</span>
              <span className="cart-list__quantity">{product.quantity}</span>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default CartDetail;
