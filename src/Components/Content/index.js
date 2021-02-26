import React from "react";
import styled from "styled-components";
import { Switch, Route, Redirect } from "react-router-dom";

const Content = () => {
  return (
    <Wrapper>
      <div className="a">item1</div>
      <div className="b">item2</div>
      <div className="c">item3</div>
      <div className="d">item4</div>
      <div className="e">
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
      </div>
      <div className="f">item</div>
      <div className="g">item2</div>
      <div className="h">item3</div>
      <div className="i">item4</div>
    </Wrapper>
  );
};

export default Content;

const Wrapper = styled.div`
  margin-top: 25px;
  height: calc(100vh - 60px);
  width: 100%;
  background-color: #f8f8f8;
  border-radius: 7px;

  display: grid;
  grid-template-columns: repeat(8, 1fr);
  grid-template-rows: repeat(8, 1fr);
  grid-gap: 25px;

  h2 {
    margin: 10px;
    padding: 10px;
    text-align: center;
  }

  & > div {
    background-color: white;
    height: 100%;
    width: 100%;
    border-radius: 7px;
    text-align: center;
    box-shadow: 10px grey;
  }

  .a {
    grid-column: 1/5;
    grid-row: 1/3;
  }
  .b {
    grid-column: 5/7;
    grid-row: 1/3;
  }
  .c {
    grid-column: 7/9;
    grid-row: 1/3;
  }
  .d {
    grid-column: 1/5;
    grid-row: 3/7;
  }
  .e {
    grid-column: 5/9;
    grid-row: 3/7;
  }
`;
