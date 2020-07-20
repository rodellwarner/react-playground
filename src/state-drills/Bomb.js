import React from "react";

class Bomb extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0, tickTockOrBoom: "" };
  }
  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState((prevState) => {
        return { count: prevState.count + 1 };
      });
    }, 1000);
    setInterval(() => {
      this.tickTockOrBoom(this.state.count);
    }, 1000);
  }

  tickTockOrBoom(number) {
    if (number % 2 === 0) {
      this.setState({
        tickTockOrBoom: "tick",
      });
    } else if (!(number % 2 === 0)) {
      this.setState({
        tickTockOrBoom: "tock",
      });
    }
    if (number >= 8) {
      this.setState({
        tickTockOrBoom: "BOOM!!!!",
      });
      clearInterval(this.interval);
    }
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    // console.log(this.state.count);
    return (
      <div>
        <p>
          {this.state.count} {this.state.tickTockOrBoom}
        </p>
      </div>
    );
  }
}

export default Bomb;
