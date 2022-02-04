import { Component } from "react";
import "./styles.css";

class BubbleAlert extends Component {
  showCartNumber(number) {
    if (!number) return "";
    return number > 9 ? "9+" : number;
  }
  render() {
    const { cartNumber } = this.props;
    return (
      <span className="bubble-alert">{this.showCartNumber(cartNumber)}</span>
    );
  }
}

export default BubbleAlert;
