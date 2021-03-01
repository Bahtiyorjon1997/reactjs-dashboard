import React, { useState } from "react";
import Header from "./../Header";
import Sidebar from "./../Sidebar";
import Content from "./../Content";
import styled from "styled-components";
import { Switch, Route, Redirect } from "react-router-dom";
import BsTable from "../../routes/bs-table";
import routes from "../../services/routeService";

const DefaultTemplate = () => {
  const [hide, setHide] = useState(false);

  return (
    <AppWrapper className={`${hide && "hide"}`}>
      <Sidebar />
      <BodyWrapper>
        <div className="hide-top"></div>
        <Header hide={hide} setHide={setHide} />
        <Content>
          <Switch>
            <Route path="/" render={() => <h2>Content</h2>} exact />

            {routes.map((route, i) => (
              <Route path={`/${route.path}`} component={route.component} />
            ))}

            <Route path="/404" render={() => <h2>No PageFound</h2>} />
            <Redirect to="/404" />

            {/* <Route path="/chat" render={() => <h2>Chat</h2>} />
            <Route path="/todo" render={() => <h2>ToDo</h2>} />
            <Route path="/calendar" render={() => <h2>Calendar</h2>} />
            <Route path="/ecommerce" render={() => <h2>Ecommerce</h2>} />
            <Route path="/user" render={() => <h2>User</h2>} />
            <Route path="/pages" render={() => <h2>Pages</h2>} />
            <Route path="/invoice" render={() => <h2>InVoice</h2>} /> */}
          </Switch>
        </Content>
      </BodyWrapper>
    </AppWrapper>
  );
};

const AppWrapper = styled.div`
  font-family: "Montserrat", "Segoe UI", Tahoma, Geneva, Verdana, sans-serif !important;
  background-color: #f8f8f8;
  display: grid;
  grid-template-columns: 270px 1fr;
  grid-gap: 30px;
  transition: 0.2s;

  &.hide {
    grid-template-columns: 0 1fr !important;
  }
`;

const BodyWrapper = styled.div`
  /* margin-left: 10px; */
  margin-right: 25px;
  margin-bottom: 60px;
  margin-top: 30px;

  .hide-top {
    width: 100%;
    height: 35px;
    background-color: rgba(248, 248, 248);
    margin-top: -35px !important;
    margin-right: 25px;
    margin-left: -25px;
    position: fixed;
  }
`;

export default DefaultTemplate;
