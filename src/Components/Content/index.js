import React from "react";
import styled from "styled-components";
import { Switch, Route, Redirect } from "react-router-dom";

const Content = () => {
  return (
    <Wrapper>
      <Switch>
        <Route path="/" render={() => <h2>Content</h2>} exact />
        <Route path="/email" render={() => <h2>Email</h2>} />
        <Route path="/chat" render={() => <h2>Chat</h2>} />
        <Route path="/todo" render={() => <h2>ToDo</h2>} />
        <Route path="/calendar" render={() => <h2>Calendar</h2>} />
        <Route path="/ecommerce" render={() => <h2>Ecommerce</h2>} />
        <Route path="/user" render={() => <h2>User</h2>} />
        <Route path="/pages" render={() => <h2>Pages</h2>} />
        <Route path="/invoice" render={() => <h2>InVoice</h2>} />
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
