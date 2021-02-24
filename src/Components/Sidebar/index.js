import React from "react";
import styled from "styled-components";
import { logo, data } from "./data";
import { ToggleBtn } from "./ToggleBtn";
import { Link } from "react-router-dom";

const Sidebar = () => {
  console.log("data", data);

  return (
    <SidebarWrapper>
      <LogoAndToggle>
        <ImgWrap>
          <img src={logo[0].icon} alt="logo" />
          <span>{logo[0].label}</span>
        </ImgWrap>
        <ToggleBtn />
      </LogoAndToggle>
      {data.map((item) => (
        <StyledLink to={item.urls}>
          {item.icon}
          {item.name}
        </StyledLink>
      ))}
    </SidebarWrapper>
  );
};

export default Sidebar;

const StyledLink = styled(Link)`
  display: block;
  font-size: 20px;
  margin: 10px 20px;
`;

const SidebarWrapper = styled.div`
  height: 100vh;
  width: 100%;
  background-color: white;
  position: sticky;
  top: 0;
  box-shadow: 5px solid grey;
  overflow-y: hidden;
  transition: 0.2s;

  h2 {
    margin: 0;
    padding: 0;
  }

  img {
    height: 24px;
    width: 50px;
  }
`;

const ImgWrap = styled.div`
  span {
    font-size: 23px;
    font-family: "Krona One", sans-serif;
    color: blue;
  }
`;

const LogoAndToggle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
  padding: 15px;
`;
