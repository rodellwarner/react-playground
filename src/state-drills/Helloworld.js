import React from "react";

class Helloworld extends React.Component {
  constructor(props) {
    super(props);
    this.state = { who: "" };
  }

  handleButtonClick = (e) => {
    this.setState({
      who: e.target.value,
    });
  };

  componentWillMount() {
    this.setState({
      who: "World",
    });
  }

  render() {
    return (
      <div>
        <p>Hello, {this.state.who}</p>
        <button id="WorldButton" onClick={this.handleButtonClick} value="World">
          World
        </button>
        <button onClick={this.handleButtonClick} value="Friend">
          Friend
        </button>
        <button onClick={this.handleButtonClick} value="React">
          React
        </button>
      </div>
    );
  }
}

export default Helloworld;
