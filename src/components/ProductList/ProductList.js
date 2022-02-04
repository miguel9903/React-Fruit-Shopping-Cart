import { Component } from "react";
import Product from "../Product";
import './styles.css';

class ProductList extends Component {
  render() {
    const { products, addProductToCart } = this.props;
    return (
      <section className="products">
        {products.map((product) => (
          <Product
            key={product.id}
            product={product}
            addProductToCart={addProductToCart}
          />
        ))}
      </section>
    );
  }
}

export default ProductList;
