import { Component } from "react";
import ProductList from "./components/ProductList";
import Layout from "./components/Layout";
import Title from "./components/Title";
import Navbar from "./components/Navbar";

class App extends Component {
  state = {
    products: [
      {
        id: 1,
        name: "Manzana",
        price: 1500,
        image: "/products/manzana.jpg",
      },
      {
        id: 2,
        name: "Naranja",
        price: 2500,
        image: "/products/naranja.jpg",
      },
      {
        id: 3,
        name: "Sandia",
        price: 2000,
        image: "/products/sandia.jpg",
      },
    ],
    cart: [],
    cartIsVisible: false,
  };

  addProductToCart = (product) => {
    const { cart } = this.state;
    const existProduct = cart.find((p) => p.id === product.id);
    if (existProduct) {
      const newCart = cart.map((p) =>
        p.id === product.id ? { ...p, quantity: p.quantity + 1 } : p
      );
      return this.setState({ cart: [...newCart] });
    }
    this.setState({
      cart: [
        ...this.state.cart,
        {
          ...product,
          quantity: 1,
        },
      ],
    });
  };

  showCart = () => {
    if (this.state.cart.length > 0) {
      this.setState({ cartIsVisible: !this.state.cartIsVisible });
    }
  };

  render() {
    return (
      <div>
        <Navbar
          cart={this.state.cart}
          cartIsVisible={this.state.cartIsVisible}
          showCart={this.showCart}
        />
        <Layout>
          <Title text="Fruit Shop" />
          <ProductList
            products={this.state.products}
            addProductToCart={this.addProductToCart}
          />
        </Layout>
      </div>
    );
  }
}

export default App;
