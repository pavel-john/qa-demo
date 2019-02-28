
const defaultState = {
  counter: 0,
};

export default (currentState = defaultState, action) => {
  const { payload, type } = action;
  const nextState = { ...currentState };

  console.log(action);

  switch (type) {
    case 'COUNTER_ADD':
      nextState.counter = currentState.counter + 1;
      return nextState;
    case 'COUNTER_SET':
      nextState.counter = payload;
      return nextState;
    default:
      return currentState;
  }
}
