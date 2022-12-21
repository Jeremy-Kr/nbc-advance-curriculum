import styled from "styled-components";

export default styled.button`
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
