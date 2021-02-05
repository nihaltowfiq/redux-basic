const redux = require("redux");

// STATE
const initialState = {
  num: 0,
};

// REDUCER
const rootReducer = (state = initialState, action) => {
  if (action.type === "INC_NUM") {
    return {
      ...state,
      num: state.num + 1,
    };
  }
  if (action.type === "ADD_NUM") {
    return {
      ...state,
      num: state.num + action.value,
    };
  }
  if (action.type === "DEC_NUM") {
    return {
      ...state,
      num: state.num - 1,
    };
  }
  return state;
};

// STORE
const store = redux.createStore(rootReducer);

console.log(store.getState());

// SUBSCRIBE
store.subscribe(() => {
  console.log("[Subcribe]:", store.getState());
});

// DISPATCH
store.dispatch({
  type: "INC_NUM",
});
store.dispatch({
  type: "ADD_NUM",
  value: 21,
});
store.dispatch({
  type: "DEC_NUM",
});
