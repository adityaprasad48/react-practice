import { ADD_TODO, REMOVE_TODO } from "./actionTypes";

const initialState = [];

export const todos = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return [...state, todo];
    case REMOVE_TODO:
      return state;
    default:
      return state;
  }
};
