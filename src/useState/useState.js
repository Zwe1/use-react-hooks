import React, { useState } from "react";
import customizeUseState from "./functionUseState";
export class Example extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }

  addCount = () => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return (
      <div>
        <p>You clicked {this.state.count} times</p>
        <button onClick={this.props}>Click me</button>
      </div>
    );
  }
}

// 外部注入状态和setter
export const FuncExample = ({ count, setCount }) => {
  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={setCount}>Click me</button>
    </div>
  );
};

// hooks 实现
const UseStateBase = () => {
  // 一个state和一个setter的集合
  const [count, setCount] = useState(0);
  const [anotherCount, setAnotherCount] = customizeUseState(0);

  return (
    <div className="mutilpleBtns">
      <p>You clicked {count} times</p>
      <p>You clicked anotherCount {anotherCount} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
      <button onClick={() => setAnotherCount(anotherCount + 1)}>
        setAnotherCount
      </button>
    </div>
  );
};

export default UseStateBase;
