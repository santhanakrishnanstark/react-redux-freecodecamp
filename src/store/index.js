import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "../reducers/counterSlice";

const store = configureStore({
    reducer: counterSlice.reducer
});

export default store;