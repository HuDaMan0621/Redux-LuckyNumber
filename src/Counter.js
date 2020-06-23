import React from "react";
import { connect } from "react-redux";
import { increment, decrement, increment5, decrement5 } from "./redux/action";

class Counter extends React.Component {
  render() {
    return (
      <div>
        <h2>What is your Lucky Number?</h2>
        <div>
          {/* <button onClick={this.props.decrement5}>-5</button> */}
          {/* <button onClick={this.props.decrement}>-1</button> */}
          <span>{this.props.counterValue}</span>
          {/* <button onClick={this.props.increment}>+1</button> */}
          <button onClick={() => this.props.increment(Math.random() * 20)}>
            Generate
          </button>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    counterValue: state.count
  };
};

const mapDispatchToProps = {
  increment,
  decrement,
  increment5,
  decrement5
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter);
