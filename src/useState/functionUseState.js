import { useRef } from "react";

export default function useState(initalState) {
  const persistState = useRef(initalState);
  const setState = nextState => {
    console.log("current", persistState.current, "nextState", nextState);
    persistState.current = nextState;
  };

  return [persistState.current, setState];
}
