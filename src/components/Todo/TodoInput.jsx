import React, { useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { postTodoList } from "../../redux/modules/todoList";
import { Button } from "../Common";

const TodoInput = () => {
  const dispatch = useDispatch();
  const todoTitleRef = useRef();
  const todoContentRef = useRef();

  const handleOnSubmit = (e) => {
    e.preventDefault();
    dispatch(
      postTodoList({
        title: todoTitleRef.current.value,
        content: todoContentRef.current.value,
      })
    );
  };

  return (
    <TodoInputWrapper>
      <TodoInputBoxWrapper
        onSubmit={(e) => {
          handleOnSubmit(e);
        }}
      >
        <div>
          <label htmlFor="todo-title">제목</label>
          <TodoInputBox ref={todoTitleRef} id="todo-title" />
        </div>
        <div>
          <label htmlFor="todo-content">내용</label>
          <TodoInputBox ref={todoContentRef} id="todo-content" />
        </div>
        <Button type="submit">추가하기</Button>
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

const TodoInputBoxWrapper = styled.form`
  width: auto;
  display: flex;
  justify-content: space-around;
`;

const TodoInputBox = styled.input`
  width: 200px;
  margin-right: 20px;
`;
export default TodoInput;
