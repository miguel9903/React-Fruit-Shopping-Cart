import { Component } from "react";
import Button from "../Button";
import "./styles.css";

class Product extends Component {
  render() {
    const { addProductToCart, product } = this.props;
    return (
      <article className="product">
        <div className="product__picture">
          <img
            alt={product.name}
            src={product.image}
            className="product__image"
          />
        </div>
        <h3 className="product__name">{product.name}</h3>
        <p className="product__price">{product.price}</p>
        <Button onClick={() => addProductToCart(product)}>Add to cart</Button>
      </article>
    );
  }
}

export default Product;
