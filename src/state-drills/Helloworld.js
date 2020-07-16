import React from "react";

class Helloworld extends React.Component {
  constructor(props) {
    console.log("constructor props", props);
    super(props);
    this.state = { who: "" };
  }
  handleButtonClick = (e) => {
    console.log(e.target.value);
    this.setState({
      who: e.target.value,
    });
  };
  render() {
    return (
      <div>
        <p>Hello {this.state.who}</p>
        <button onClick={this.handleButtonClick} value="World">
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
