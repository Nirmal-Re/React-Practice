import React, { Component } from "react";

class Counter extends Component {
  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }
  countFormat() {
    const { value } = this.props.counter;
    return value === 0 ? "Zero" : value;
  }
  render() {
    return (
      <div>
        <span className={this.getBadgeClasses()}> {this.countFormat()} </span>
        <button
          onClick={() => this.props.onIncrement(this.props.counter)}
          className="btn btn-secondary btn-sm m-2"
        >
          Increment
        </button>
        <button
          onClick={() => this.props.onDelete(this.props.counter.id)}
          className="btn btn-warning btn-sm m-2"
        >
          Delete
        </button>
      </div>
    );
  }
}

export default Counter;
