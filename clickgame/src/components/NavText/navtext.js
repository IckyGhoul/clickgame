import React, { Component } from "react";


// NavMessage renders an li tag containing an message for the user

class NavMessage extends Component {
  state = {
    message: "",
    shuffle: false
  };

  componentWillReceiveProps({ score, topScore }) {
    const newState = { shuffle: true };
    if (score === 0 && topScore === 0) {
      newState.message = "";
    } else if (score === 0 && topScore > 0) {
      newState.message = "incorrect";
    } else {
      newState.message = "correct";
    }
    this.setState(newState, () =>
      setTimeout(() => this.setState({ shuffle: false }), 500)
    );
  }

  renderMessage = () => {
    switch (this.state.message) {
    case "correct":
      return "You guessed correctly!";
    case "incorrect":
      return "Game over!";
    default:
      return "Click any image to start the Game. If you click the same image twice, you lose!";
    }
  };

  render() {
    return (
      <li className={this.state.shuffle ? this.state.message : ""}>
        {this.renderMessage()}
      </li>
    );
  }
}

export default NavMessage;
