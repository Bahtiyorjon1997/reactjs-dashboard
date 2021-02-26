import React, { useState } from "react";
import styled from "styled-components";
import { logo, data } from "./data";
import { Link } from "react-router-dom";
import { Collapse } from "@material-ui/core";
import { FiChevronDown, FiChevronRight, FiCheck } from "react-icons/fi";

const Sidebar = () => {
  const [shows, setShows] = useState({
    Invoice: false,
    Pages: false,
  });
  const [iconPic, setIconPic] = useState(false);

  const subIcon = iconPic ? <FiChevronDown /> : <FiChevronRight />;

  console.log("data", data);

  const handleMenu = (item) => {
    setShows({ ...shows, [item.name]: !shows[item.name] });
    setIconPic(!iconPic);
  };

  return (
    <SidebarWrapper>
      <LogoAndToggle>
        <ImgWrap>
          <List>
            <img src={logo[0].icon} alt="logo" />
            <span>{logo[0].label}</span>
          </List>
        </ImgWrap>
      </LogoAndToggle>
      <NavElements>
        {data.map((item) => (
          <>
            <StyledLink to={item.urls} onClick={() => handleMenu(item)}>
              {item.icon}
              <span>{item.name}</span>
              <span className="icon-span">{item.subItems && subIcon}</span>
            </StyledLink>
            {item.subItems && (
              <Collapse in={shows[item.name]} timeout="auto" unmountOnExit>
                {item.subItems.map((subItem) => (
                  <StyledLink to={item.urls}>
                    <span>
                      <FiCheck />
                    </span>
                    <span>{subItem}</span>
                  </StyledLink>
                ))}
              </Collapse>
            )}
          </>
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

const List = styled.div``;

const StyledLink = styled(Link)`
  height: 25px;
  font-size: 15px;
  font-weight: 500;
  margin: 0 17px;
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
  .icon-span {
    position: absolute;
    right: 10px;
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
  transition: 0.4s;

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
    font-size: 20px;
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
