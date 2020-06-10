import React from "react";
import "./die.css";
class Dice extends React.Component {
  render() {
    return (
      <i
        className={`Die fas fa-dice-${this.props.number} ${
          this.props.rolling ? "rolling" : ""
        }`}
      ></i>
    );
  }
}

export default Dice;
