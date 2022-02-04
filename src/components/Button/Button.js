import { Component } from "react";
import "./styles.css";

class Button extends Component {
  render() {
    return <button className="product__button" {...this.props} />;
  }
}

export default Button;
