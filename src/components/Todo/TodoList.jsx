import React from "react";
import styled from "styled-components";
import TodoItem from "./TodoItem";

const TodoList = () => {
  return (
    <TodoListWrapper>
      <TodoListTitle>TODO / DONE</TodoListTitle>
      <TodoItem />
      <TodoItem />
    </TodoListWrapper>
  );
};

const TodoListWrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const TodoListTitle = styled.h2`
  color: #333;
`;

export default TodoList;
