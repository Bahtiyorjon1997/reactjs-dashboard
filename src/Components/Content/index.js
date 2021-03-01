import React from "react";
import styled from "styled-components";

const Content = ({ children, ...props }) => {
  return <ContentWrapper {...props}>{children}</ContentWrapper>;
};

export default Content;

const ContentWrapper = styled.div`
  width: calc(100% - 30px);
  height: 100%;
  background-color: white;
  border-radius: 5px;
  box-shadow: 0 10px 20px -4px #00002222;
  padding: 15px;
`;
