import React from "react";
import styled from "styled-components";
import { Button } from "../Common";

const TodoInput = () => {
  return (
    <TodoInputWrapper>
      <TodoInputBoxWrapper>
        <div>
          <label htmlFor="todo-title">제목</label>
          <TodoInputBox id="todo-title" />
        </div>
        <div>
          <label htmlFor="todo-content">내용</label>
          <TodoInputBox id="todo-content" />
        </div>
        <Button>추가하기</Button>
      </TodoInputBoxWrapper>
    </TodoInputWrapper>
  );
};

const TodoInputWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: 20px 0;
`;

const TodoInputBoxWrapper = styled.div`
  width: auto;
  display: flex;
  justify-content: space-around;
`;

const TodoInputBox = styled.input`
  width: 200px;
  margin-right: 20px;
`;
export default TodoInput;
