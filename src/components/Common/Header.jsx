import React from "react";
import styled from "styled-components";

const Header = () => {
  return (
    <HeaderContainer>
      <HeaderText>Todo App</HeaderText>
      <HeaderText>NBC-Advance-Curriculum Test </HeaderText>
    </HeaderContainer>
  );
};

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  background-color: #e9a79d;
  height: 50px;
  border-radius: 10px;
`;

const HeaderText = styled.span`
  font-size: 26px;
`;

export default Header;
