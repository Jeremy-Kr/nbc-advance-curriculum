import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
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
  },
});

const { reducer } = todoListSlice;

export default reducer;
