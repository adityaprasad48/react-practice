import { ADD_TODO } from "./reducer";


// action creator
export const addTodo = (todo) => {
  return { type: ADD_TODO, todo };
};

