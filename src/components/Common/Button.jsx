import React from "react";
import styled from "styled-components";

const Button = ({ children }) => {
  return <CustomButton>{children}</CustomButton>;
};

const CustomButton = styled.button`
  background-color: #fff;
  border: 1px solid #333;
  margin-right: 5px;
  border-radius: 5px;
  transition: 0.2s;
  &:last-of-type {
    margin-right: 0px;
  }
  &:hover {
    cursor: pointer;
    background-color: #fce7e7;
  }
`;

export default Button;
