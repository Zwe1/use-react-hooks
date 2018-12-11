let state = undefined;
export default function useState(initalState) {
  state = initalState;
  const setState = nextState => {
    console.log("nextState", nextState);
    state = nextState;
  };

  return [state, setState];
}
