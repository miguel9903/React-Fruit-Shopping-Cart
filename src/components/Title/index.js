import { Component } from "react";

class Title extends Component {
  render() {
    return <h1 className="title">{this.props.text}</h1>;
  }
}

export default Title;
