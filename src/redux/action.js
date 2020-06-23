export const INCREMENT = "INCREMENT";
export const DECREMENT = "DECREMENT";
// export const INCREMENT5 = 'INCREMENT5';
export const DECREMENT5 = "DECREMENT5";

export function increment(value) {
  return {
    type: INCREMENT,
    value
  };
}

export function decrement() {
  return {
    type: DECREMENT
  };
}

// export function increment5() {
//   return {
//     type: INCREMENT5
//  }
// }

// export function decrement5() {
//   return {
//     type: DECREMENT5
//   }
// }
