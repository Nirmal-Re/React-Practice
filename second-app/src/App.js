import React, { Component } from "react";

import Navbar from "./components/navbar";
import Counters from "./components/counters";

class App extends Component {
  state = {
    counters: [
      { id: 0, value: 0 },
      { id: 1, value: 25 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
    ],
  };
  handleReset = () => {
    const counters = this.state.counters.map((c) => {
      const counter = { ...c };
      counter.value = 0;
      return counter;
    });
    this.setState({ counters });
  };
  handleIncrement = (counter) => {
    const counters = [...this.state.counters];
    counters[counter.id] = { ...counter };
    counters[counter.id].value++;
    this.setState({ counters });
  };
  handleDelete = (counterID) => {
    const counters = this.state.counters.filter(
      (counter) => counter.id !== counterID
    );
    this.setState({ counters });
  };
  render() {
    return (
      <React.Fragment>
        <Navbar
          totalCounter={
            this.state.counters.filter((counter) => counter.value > 0).length
          }
        />
        <main className="container">
          <Counters
            onReset={this.handleReset}
            onDelete={this.handleDelete}
            onIncrement={this.handleIncrement}
            counters={this.state.counters}
          />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
