import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./../components/counter/counterSlice";
import customerReducer from "./../components/name/nameSlice";
import postReducer from "./../components/posts/postSlice";

export default configureStore({
  reducer: {
    counter: counterReducer,
    customers: customerReducer,
    posts: postReducer,
  },
});
