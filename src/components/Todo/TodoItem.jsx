import React from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { deleteTodoItem, toggleTodoItem } from "../../redux/modules/todoList";
import { Button } from "../Common";

const TodoItem = ({ title, content, isDone, id }) => {
  const dispatch = useDispatch();

  const handleOnDeleteClick = () => {
    dispatch(deleteTodoItem(id));
  };

  const handleOnToggleClick = () => {
    dispatch(toggleTodoItem({ id, isDone }));
  };
  return (
    <TodoItemWrapper>
      <TodoItemTitle>{title}</TodoItemTitle>
      <TodoItemContent>{content}</TodoItemContent>
      <div>
        <Button
          onClick={() => {
            handleOnToggleClick();
          }}
        >
          {isDone ? "취소" : "완료"}
        </Button>
        <Button
          onClick={() => {
            handleOnDeleteClick();
          }}
        >
          삭제
        </Button>
      </div>
    </TodoItemWrapper>
  );
};

const TodoItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  width: 300px;
  height: auto;
`;

const TodoItemTitle = styled.h3`
  color: #333;
  margin-bottom: 5px;
`;
const TodoItemContent = styled.div`
  color: #333;
  margin-bottom: 5px;
`;

export default TodoItem;
