import React from "react";
import Dice from "../components/Dice";
import "../components/Rolling-die.css";
class RollingDice extends React.Component {
  static defaultProps = {
    sides: ["one", "two", "three", "four", "five", "six"],
  };
  constructor(props) {
    super(props);
    this.state = {
      dice1: "one",
      dice2: "two",
      rollling: false,
    };
  }

  rollDice = () => {
    const Die1 = this.props.sides[
      Math.floor(Math.random() * this.props.sides.length)
    ];
    const Die2 = this.props.sides[
      Math.floor(Math.random() * this.props.sides.length)
    ];
    this.setState({ dice1: Die1, dice2: Die2, rollling: true });

    setTimeout(() => {
      this.setState({ rollling: false });
    }, 500);
  };
  render() {
    return (
      <div className="Rolling-Die">
        <div className="container">
          <Dice number={this.state.dice1} rolling={this.state.rollling} />
          <Dice number={this.state.dice2} rolling={this.state.rollling} />
        </div>
        <div className="button">
          <button onClick={this.rollDice} disabled={this.state.rollling}>
            {this.state.rollling ? "Rolling..." : "Roll Dice !"}
          </button>
        </div>
      </div>
    );
  }
}

export default RollingDice;
