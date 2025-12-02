import React from "react";

export default class Message extends React.Component {
  constructor() {
    super();
    this.state = { value: 0 };
  }

  Incrementer() {
    if (this.state.value < 10)
      this.setState({ value: this.state.value + 1 });
  }

  Decrementer() {
    if (this.state.value > 0)
      this.setState({ value: this.state.value - 1 });
  }

  render() {
    return (
      <div>
        <h2>{this.state.value}</h2>
        <button onClick={() => this.Incrementer()}>Incrementer</button>
        <button onClick={() => this.Decrementer()}>Decrementer</button>
      </div>
    );
  }
}