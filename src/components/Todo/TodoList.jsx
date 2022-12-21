import React from "react";
import styled from "styled-components";
import TodoItem from "./TodoItem";

const TodoList = ({ children, todoItems }) => {
  return (
    <TodoListWrapper>
      <TodoListTitle>{children}</TodoListTitle>

      {todoItems.map((item) => (
        <TodoItem
          title={item.title}
          content={item.content}
          isDone={item.isDone}
          key={item.id}
        />
      ))}
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
