import React from "react";
import styled from "styled-components";
import { logo, data } from "./data";
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
      </LogoAndToggle>
      <NavElements>
        {data.map((item) => (
          <StyledLink to={item.urls}>
            {item.icon}
            <span>{item.name}</span>
          </StyledLink>
        ))}
      </NavElements>
    </SidebarWrapper>
  );
};

export default Sidebar;

const NavElements = styled.div`
  display: flex;
  flex-direction: column;
`;

const StyledLink = styled(Link)`
  height: 25px;
  font-size: 20px;
  margin: 0 20px;
  color: #625f;
  text-decoration: none;
  align-items: center;
  display: flex;
  transition: 0.4s;
  padding: 10px;

  /* &:hover {
    background-color: blueviolet;
  } */

  span {
    margin-left: 20px;
  }

  &:hover {
    border-radius: 5px;
    transition: 0.4s;
    margin: 0 25px;
  }
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
