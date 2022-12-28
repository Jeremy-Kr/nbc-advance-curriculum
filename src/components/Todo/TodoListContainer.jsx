import React, { useEffect } from "react";
import styled from "styled-components";
import { useTodo } from "../../customHooks/useTodo";
import { TodoList } from "./";

const TodoListContainer = () => {
  const { isLoading, todoList, doneList } = useTodo();

  if (isLoading) {
    return <div>로딩중...</div>;
  }

  return (
    <TodoListContainerWrapper>
      <TodoList todoItems={todoList}>TODO!</TodoList>
      <TodoList todoItems={doneList}>DONE!</TodoList>
    </TodoListContainerWrapper>
  );
};

const TodoListContainerWrapper = styled.main`
  display: flex;
  justify-content: space-around;
  align-items: flex-start;
`;

export default TodoListContainer;
