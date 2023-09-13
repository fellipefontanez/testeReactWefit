import filmesReducer from "./reducers/filmes";
import { configureStore } from "@reduxjs/toolkit";

export default configureStore({
  reducer: {
    filmes: filmesReducer,
  },
});
