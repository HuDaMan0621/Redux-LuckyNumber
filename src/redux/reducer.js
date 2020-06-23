import { INCREMENT, DECREMENT, INCREMENT5, DECREMENT5 } from "./action";

const initialState = {
  count: 0
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case INCREMENT:
      return {
        count: state.count + action.value
      };
    // break;
    case DECREMENT:
      return {
        count: state.count - action.value
      };
    // case INCREMENT5:
    //   return {
    //     count: state.count + 5
    //   };
    // break;
    // case DECREMENT5:
    //   return {
    //     count: state.count - 5
    //   };
    default:
      return state;
  }
}

export default reducer;
