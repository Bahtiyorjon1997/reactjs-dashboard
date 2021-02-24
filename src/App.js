import React, { useState } from "react";
import Header from "./Components/Header";
import Sidebar from "./Components/Sidebar";
import Content from "./Components/Content";
import styled from "styled-components";

const App = () => {
  const [hide, setHide] = useState(false);

  return (
    <AppWrapper className={`${hide && "hide"}`}>
      <Sidebar />

      <ContentWrapper>
        <Header hide={hide} setHide={setHide} />
        <Content />
      </ContentWrapper>
    </AppWrapper>
  );
};

export default App;

const AppWrapper = styled.div`
  background-color: #f8f8f8;
  display: grid;
  grid-template-columns: 250px 1fr;
  grid-gap: 30px;
  transition: 0.2s;

  &.hide {
    grid-template-columns: 0 1fr !important;
  }
`;

const ContentWrapper = styled.div`
  /* margin-left: 10px; */
  margin-right: 25px;
  margin-bottom: 60px;
  margin-top: 30px;
`;
