import React, { useState } from "react";

let visible = true;

const HookCom = () => {
  const [age, setAge] = useState(42);
  // if (visible) {
  //   const [fruit] = useState("banana");
  //   visible = false;
  // }
  const [todos, setTodos] = useState([{ text: "learning Hooks" }]);

  return (
    <div className="useState">
      <div>
        <p>Age: {age}</p>
        <button
          onClick={() => {
            setAge(age * 2);
          }}
        >
          setAge
        </button>
      </div>
      <div>
        <p>
          {todos.map(todo => (
            <div>{`I'm ${todo.text}`}</div>
          ))}
        </p>
        <button onClick={() => setTodos(todos.concat([{ text: "add text" }]))}>
          add todos
        </button>
      </div>
      {/* <div>{`${fruit} taste good`}</div> */}
    </div>
  );
};

export default HookCom;
