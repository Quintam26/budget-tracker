export const INCREMENT = 'INCREMENT';

export function count(state = 0, { type }) {
  switch(type) {
    case INCREMENT:
      return state + 1;
    default:
      return state;
  }
}