import React, { useState } from "react";
import styled from "styled-components";
import { logo, data } from "./data";
import { Link } from "react-router-dom";
import { Collapse } from "@material-ui/core";
import {
  FiChevronDown,
  FiChevronRight,
  FiCheck,
  FiCircle,
} from "react-icons/fi";
import { GoFile } from "react-icons/go";

const Sidebar = () => {
  const [shows, setShows] = useState({});

  // const subIcon =   <FiChevronDown /> : <FiChevronRight />;

  console.log("data", data);

  const handleMenu = (item) => {
    setShows({ ...shows, [item.name]: !shows[item.name] });
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
        {data.map((item) => {
          return (
            <>
              <span className="label">{item.label}</span>
              {item.props.map((item) => (
                <>
                  <StyledLink to={item.urls} onClick={() => handleMenu(item)}>
                    {item.icon}
                    <span>{item.name}</span>
                    <span class="icon-span">
                      {item.subItems &&
                        (shows[item.name] ? (
                          <FiChevronDown />
                        ) : (
                          <FiChevronRight />
                        ))}
                    </span>
                  </StyledLink>
                  {item.subItems && (
                    <Collapse
                      in={shows[item.name]}
                      timeout="auto"
                      unmountOnExit
                    >
                      {item.subItems.map((subItem) => (
                        <StyledLink to={item.urls}>
                          <span>
                            <GoFile />
                          </span>
                          <span>{subItem}</span>
                        </StyledLink>
                      ))}
                    </Collapse>
                  )}
                </>
              ))}
            </>
          );
        })}
      </NavElements>
    </SidebarWrapper>
  );
};

export default Sidebar;

const NavElements = styled.div`
  display: flex;
  flex-direction: column;
`;

const List = styled.div`
  span {
    margin-left: 5px;
    padding-bottom: 10px;
  }
`;

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

  span {
    margin-left: 20px;
  }
  .icon-span {
    position: absolute;
    right: 20px;
  }

  &:hover {
    border-radius: 5px;
    margin: 0 23px;
    transition: 0.2s;
  }
`;

const SidebarWrapper = styled.div`
  height: 100vh;
  width: 100%;
  background-color: white;
  position: sticky;
  top: 0;
  box-shadow: 5px solid grey;
  overflow-y: scroll;
  transition: 0.4s;
  padding-bottom: 20px;
  padding-top: 5px;
  h2 {
    margin: 0;
    padding: 0;
  }

  img {
    height: 30px;
    width: 50px;
  }

  .label {
    color: grey;
    margin: 25px 5px 5px 25px;
    font-size: 0.8rem;
  }
`;

const ImgWrap = styled.div`
  span {
    font-size: 27px;
    font-family: "Krona One", sans-serif;
    color: blue;
  }
`;

const LogoAndToggle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 12px;
  padding: 15px;
  padding-left: 45px;
`;
