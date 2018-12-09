import React, { useState } from 'react';

// 有状态组件
class ClassCom extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        count: 0
      };
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

// 由外部注入的函数组件
FuncCom = ({count, setCount}) => {
    return (
        <div className='useState'>
            <div>You clicked {count} times</div>
            <button onClick={() => setCount(count + 1)}>Click me</button>
        </div>
      );
}

// 使用react hooks
const HookCom = () => {
    // 一个状态及一个状态控制器是一个集合，函数组件拥有自己的状态。
    const [count, setCount] = useState(0);
    return (
        <div className='useState'>
            <div>You clicked {count} times</div>
            <button onClick={() => setCount(count + 1)}>Click me</button>
        </div>
    )
}

export default HookCom;