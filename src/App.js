import React from 'react';
import Header from './Components/Header'
import Sidebar from './Components/Sidebar'
import Content from './Components/Content';
import styled from 'styled-components'

const App = () => {
  return (
    <Wrapper>
      <Sidebar />

      <ContentWrapper>
        <Header />
        <Content />
      </ContentWrapper>

    </Wrapper>
  );
}

export default App;

const Wrapper = styled.div` 
  background-color: #f8f8f8;
  display: grid;
  grid-template-columns: 250px 1fr;
  grid-gap: 30px;
`;

const ContentWrapper = styled.div` 
  margin-right: 25px;
  margin-bottom: 60px;
  margin-top: 30px; 
`;
