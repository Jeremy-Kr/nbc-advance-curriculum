import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { getTodoList } from "../../redux/modules/todoList";
import { TodoList } from "./";

const TodoListContainer = () => {
  const todoState = useSelector((state) => state.todoList);
  const dispatch = useDispatch();

  useEffect(() => {
    todoState.todoListData.length === 0 && dispatch(getTodoList());
  }, [dispatch, todoState]);

  const todoList = todoState.todoListData.filter((item) => !item.isDone);
  const doneList = todoState.todoListData.filter((item) => item.isDone);

  return (
    <TodoListContainerWrapper>
      {todoState.isLoading ? (
        <h2>Todo 리스트 가져오는중...</h2>
      ) : (
        <>
          <TodoList todoItems={todoList}>TODO!</TodoList>
          <TodoList todoItems={doneList}>DONE!</TodoList>
        </>
      )}
    </TodoListContainerWrapper>
  );
};

const TodoListContainerWrapper = styled.main`
  display: flex;
  justify-content: space-around;
  align-items: flex-start;
`;

export default TodoListContainer;
