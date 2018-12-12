import React, { useState, useEffect } from "react";

const Effect = () => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    console.log(
      `${count}. 生命周期的合并 —— useEffect当组件rendered时触发，是componentDidMount, componentDidUpdate 和 componentWillUnmount`
    );
    // 更新文档的标题
    document.title = count;
    fetchData = () => {};
  });

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
};

export class Example extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }

  componentDidMount() {
    document.title = `You clicked ${this.state.count} times`;
  }

  componentDidUpdate() {
    document.title = `You clicked ${this.state.count} times`;
  }

  componentWillUnmount() {
    document.title = `You clicked ${this.state.count} times`;
  }

  render() {
    return (
      <div>
        <p>You clicked {this.state.count} times</p>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          Click me
        </button>
      </div>
    );
  }
}

export default Effect;
