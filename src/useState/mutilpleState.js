import React, { useState } from "react";

let visible = true;

// 使用hooks的两点原则：
// 1. 必须在函数总结中使用
// 2. 必须在最外层使用，不能放在if else 语句中
const HookCom = () => {
  const [age, setAge] = useState(42);
  // if (visible) {
  //   const [fruit] = useState("banana");
  //   visible = false;
  // }
  const [todos, setTodos] = useState([{ text: "learning Hooks" }]);
  console.log("age", age, todos);

  return (
    <div className="useState">
      <div>
        <p>Age: {age}</p>
        <button
          onClick={() => {
            setAge(age + 1);
            setAge(age + 2);
            setTodos(todos.concat([{ text: "add te----xt" }]));
          }}
        >
          setAge
        </button>
      </div>
      <div className="span-list">
        <p>
          {todos.map((todo, i) => (
            <span key={`${todo.text}_${i}`}>{`I'm ${todo.text}`}</span>
          ))}
        </p>
        <button onClick={() => setTodos(todos.concat([{ text: "add text" }]))}>
          add todos
        </button>
      </div>
    </div>
  );
};

export default HookCom;
