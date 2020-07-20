import React from "react";

class RouletteGun extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      chamber: null,
      spinningTheChamber: false,
      textToRender: "",
    };
  }

  getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
  }

  // componentDidMount() {
  //   if (this.state.chamber === this.props.bulletInChamber) {
  //     this.setState({ textToRender: "BANG!!!!" });
  //   } else if (this.state.chamber !== this.props.bulletInChamber) {
  //     this.setState({ textToRender: "you're safe!" });
  //   }
  // }

  handleButtonClick = () => {
    console.log("props in handleButtonClick", this.props);
    console.log("state in handleButtonClick", this.state);
    this.setState({
      spinningTheChamber: true,
      textToRender: "spinning the chamber and pulling the trigger! ...",
    });
    setTimeout(() => {
      this.setState({
        chamber: this.getRandomInt(1, 9),
        spinningTheChamber: false,
      });
      if (this.state.chamber === this.props.bulletInChamber) {
        this.setState({ textToRender: "BANG!!!!" });
      } else if (this.state.chamber !== this.props.bulletInChamber) {
        this.setState({ textToRender: "you're safe!" });
      }
    }, 2000);
  };

  render() {
    return (
      <div>
        <p>
          {this.state.textToRender}
          <button onClick={this.handleButtonClick}>Pull the trigger!</button>
        </p>
      </div>
    );
  }
}

export default RouletteGun;
