import { configureStore } from "@reduxjs/toolkit";
import todoList from "../modules/todoList";

const store = configureStore({
  reducer: { todoList },
});

export default store;
