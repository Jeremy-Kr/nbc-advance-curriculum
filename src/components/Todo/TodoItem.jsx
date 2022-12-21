import React from "react";
import styled from "styled-components";
import { Button } from "../Common";

const TodoItem = ({ title, content, isDone }) => {
  return (
    <TodoItemWrapper>
      <TodoItemTitle>{title}</TodoItemTitle>
      <TodoItemContent>{content}</TodoItemContent>
      <div>
        <Button>{isDone ? "취소" : "완료"}</Button>
        <Button>수정하기</Button>
        <Button>삭제</Button>
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
