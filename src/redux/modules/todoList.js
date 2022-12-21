import { createAsyncThunk, createSlice, nanoid } from "@reduxjs/toolkit";
import axios from "axios";

const name = "todoList";

const initialState = {
  todoListData: [],
  isLoading: false,
  error: null,
};

export const getTodoList = createAsyncThunk(
  `${name}/getTodoList`,
  async (payload, { fulfillWithValue, rejectWithValue }) => {
    try {
      const res = await axios.get("http://localhost:3001/todoList");
      return fulfillWithValue(res.data);
    } catch (e) {
      return rejectWithValue(e);
    }
  }
);

export const postTodoList = createAsyncThunk(
  `${name}/postTodoList`,
  async ({ title, content }, { fulfillWithValue, rejectWithValue }) => {
    try {
      const res = await axios.post("http://localhost:3001/todoList", {
        title,
        content,
        isDone: false,
        id: nanoid(),
      });
      return fulfillWithValue(res.data);
    } catch (e) {
      return rejectWithValue(e);
    }
  }
);

const todoListSlice = createSlice({
  name,
  initialState,
  reducers: {},
  extraReducers: {
    [getTodoList.pending]: (state, action) => {
      state.isLoading = true;
    },
    [getTodoList.fulfilled]: (state, action) => {
      state.todoListData = action.payload;
      state.isLoading = false;
    },
    [getTodoList.rejected]: (state, action) => {
      state.error = action.error;
      state.isLoading = false;
    },
    [postTodoList.pending]: (state, action) => {
      state.isLoading = true;
    },
    [postTodoList.fulfilled]: (state, action) => {
      const newPostTodoList = [...state.todoListData, action.payload];
      state.todoListData = newPostTodoList;
      state.isLoading = false;
    },
    [postTodoList.rejected]: (state, action) => {
      state.error = action.error;
      state.isLoading = false;
    },
  },
});

const { reducer } = todoListSlice;

export default reducer;
