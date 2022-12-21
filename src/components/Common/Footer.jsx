import React from "react";
import styled from "styled-components";

const Footer = () => {
  return (
    <FooterContainer>
      <span> &copy; 2022 NBC-Jeremy</span>
    </FooterContainer>
  );
};

const FooterContainer = styled.footer`
  display: flex;
  justify-content: center;
  margin: 10px;
`;

export default Footer;
