import React, { useState, useEffect } from "react";

const MutilpleEffect = () => {
  // 状态和状态修改器组合，更小的细粒度控制
  const [count, setCount] = useState(0);
  const [name, setName] = useState("Ein");
  const relative = count > 1 ? [] : [count];

  useEffect(() => {
    console.log(
      "useEffect可以多次使用，第二个参数可以设置useEffect响应的state",
      `count: ${count}`
    );
  }, relative);

  useEffect(
    () => {
      const timer = setTimeout(() => {
        // dosomething
      }, 0);
      return params => {
        // 清除定时器
        console.log(
          "useEfftct 传入的 excute 无默认参数:",
          params,
          "。触发时机在willUpdate阶段"
        );
        clearTimeout(timer);
      };
    },
    [count]
  );

  return (
    <div className="mutilpleBtns">
      <p>{`${name} press the button ${count} times`}</p>
      <div>
        <button onClick={() => setCount(count + 1)}>add count</button>
        <button onClick={() => setCount(count)}>not change</button>
        <button onClick={() => setName(name === "Zwei" ? "Ein" : "Zwei")}>
          changeName
        </button>
      </div>
    </div>
  );
};

export default MutilpleEffect;
