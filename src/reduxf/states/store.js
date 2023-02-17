import { configureStore } from "@reduxjs/toolkit";
import incReducer from "../reducers/redu";

export default configureStore({
  reducer: {
    number: incReducer,
  },
});
