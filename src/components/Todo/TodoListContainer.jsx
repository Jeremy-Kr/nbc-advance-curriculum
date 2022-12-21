import React from "react";
import styled from "styled-components";
import { TodoList } from "./";

const TodoListContainer = () => {
  return (
    <TodoListContainerWrapper>
      <TodoList />
      <TodoList />
    </TodoListContainerWrapper>
  );
};

const TodoListContainerWrapper = styled.main`
  display: flex;
  justify-content: space-around;
`;

export default TodoListContainer;
