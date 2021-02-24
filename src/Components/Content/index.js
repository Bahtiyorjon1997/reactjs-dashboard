import React from "react";
import styled from "styled-components";
import { Switch, Route, Redirect } from "react-router-dom";

const Content = () => {
  return (
    <Wrapper>
      <Switch>
        <Route path="/" render={() => <h2>Content</h2>} exact />
        <Route path="/email" render={() => <h2>Email</h2>} />
        <Route path="/email2" render={() => <h2>Email2</h2>} />
        <Route path="/email3" render={() => <h2>Email3</h2>} />
        <Route path="/404" render={() => <h2>No PageFound</h2>} />
        <Redirect to="/404" />
      </Switch>
    </Wrapper>
  );
};

export default Content;

const Wrapper = styled.div`
  height: calc(100vh - 60px);
  width: 100%;
  background-color: white;
  border-radius: 7px;

  h2 {
    margin: 10px;
    padding: 10px;
    text-align: center;
  }
`;
