import { useState, useEffect, useCallback, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  postTodoList,
  deleteTodoItem,
  toggleTodoItem,
  getTodoList,
  setLoad,
} from "../redux/modules/todoList";

export const useTodo = () => {
  const { todoListData, isLoading, isLoad } = useSelector(
    (state) => state.todoList
  );

  const [todoList, setTodoList] = useState([]);
  const [doneList, setDoneList] = useState([]);

  const dispatch = useDispatch();

  useEffect(() => {
    if (!isLoad) {
      dispatch(getTodoList());
      dispatch(setLoad(true));
    }
  }, [isLoad]);

  useEffect(() => {
    setTodoList(todoListData.filter((item) => !item.isDone));
    setDoneList(todoListData.filter((item) => item.isDone));
  }, [todoListData]);

  const addTodo = ({ title, content }) => {
    dispatch(postTodoList({ title, content }));
  };

  const deleteTodo = (id) => {
    dispatch(deleteTodoItem(id));
  };

  const toggleTodo = ({ id, isDone }) => {
    dispatch(toggleTodoItem({ id, isDone }));
  };

  return { isLoading, todoList, doneList, addTodo, deleteTodo, toggleTodo };
};
