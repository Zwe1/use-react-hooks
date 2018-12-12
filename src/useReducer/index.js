import React, { useReducer } from "react";

const initialState = { count: 0 };

function reducer(state, action) {
  switch (action.type) {
    case "reset":
      return { count: action.payload };
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    default:
      return state;
  }
}

function Counter() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="mutilpleBtns">
      <p>Count: {state.count}</p>
      <div>
        <button
          onClick={() =>
            dispatch({ type: "reset", payload: initialState.count })
          }
        >
          Reset
        </button>
        <button onClick={() => dispatch({ type: "increment" })}>+</button>
        <button onClick={() => dispatch({ type: "decrement" })}>-</button>
      </div>
    </div>
  );
}

export default Counter;
