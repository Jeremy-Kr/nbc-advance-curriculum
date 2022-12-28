import { createAsyncThunk, createSlice, nanoid } from "@reduxjs/toolkit";
import axios from "axios";

const name = "todoList";

const initialState = {
  todoListData: [],
  isLoading: false,
  error: null,
  isLoad: false,
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

export const deleteTodoItem = createAsyncThunk(
  `${name}/deleteTodoItem`,
  async (todoItemId, { fulfillWithValue, rejectWithValue }) => {
    try {
      await axios.delete(`http://localhost:3001/todoList/${todoItemId}`);
      return fulfillWithValue(todoItemId);
    } catch (e) {
      return rejectWithValue(e);
    }
  }
);

export const toggleTodoItem = createAsyncThunk(
  `${name}/toggleTodoItem`,
  async ({ id, isDone }, { fulfillWithValue, rejectWithValue }) => {
    try {
      await axios.patch(`http://localhost:3001/todoList/${id}`, {
        isDone: !isDone,
      });
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
  reducers: {
    setLoad: (state, action) => {
      state.isLoad = action.payload;
    },
  },
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
      let newTodoList = [...state.todoListData, action.payload];
      state.todoListData = newTodoList;
      state.isLoading = false;
    },
    [postTodoList.rejected]: (state, action) => {
      state.error = action.error;
      state.isLoading = false;
    },
    [deleteTodoItem.pending]: (state, action) => {
      state.isLoading = true;
    },
    [deleteTodoItem.fulfilled]: (state, action) => {
      let newTodoList = state.todoListData.filter(
        (item) => item.id !== action.payload
      );
      state.todoListData = newTodoList;
      state.isLoading = false;
    },
    [deleteTodoItem.rejected]: (state, action) => {
      state.error = action.error;
      state.isLoading = false;
    },
    [toggleTodoItem.pending]: (state, action) => {
      state.isLoading = true;
    },
    [toggleTodoItem.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.todoListData = action.payload;
    },
    [toggleTodoItem.rejected]: (state, action) => {
      state.error = action.error;
      state.isLoading = false;
    },
  },
});

const { reducer } = todoListSlice;

export const { setLoad } = todoListSlice.actions;
export default reducer;
