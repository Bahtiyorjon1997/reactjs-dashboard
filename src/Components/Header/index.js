import React from "react";
import styled from "styled-components";
import "./data";
import { Icons } from "./data";

import {
  FiCalendar,
  FiMessageSquare,
  FiMail,
  FiCheckSquare,
  FiStar,
} from "react-icons/fi";

import { GiHamburgerMenu } from "react-icons/gi";
import { IconButton } from "@material-ui/core";

const Header = ({ hide, setHide, ...props }) => {
  return (
    <HeaderWrapper {...props}>
      <LeftIconWrapper>
        <IconButton
          onClick={() => {
            setHide(!hide);
          }}
          className="ml-2"
        >
          <GiHamburgerMenu />
        </IconButton>

        <FiCalendar />

        <FiMessageSquare />

        <FiMail />

        <FiCheckSquare />

        <FiStar />
      </LeftIconWrapper>
      <RightIconWrapper>
        <FiCalendar />

        <FiMessageSquare />

        <FiMail />

        <FiCheckSquare />

        <FiStar />
      </RightIconWrapper>
    </HeaderWrapper>
  );
};
export default Header;

const LeftIconWrapper = styled.div`
  display: flex;
  padding-left: 15px;
  align-items: center;
`;
const RightIconWrapper = styled.div`
  display: flex;
  padding-right: 20px;
  align-items: center;
`;

const HeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 60px;
  width: 100%;
  background-color: white;
  font-size: 22px;
  border-radius: 5px;
  position: sticky; /* this is how we keep things stick at some parts of the page*/
  top: 30px;
  text-align: left;
  margin-bottom: 1rem;
  padding-top: 0;
  margin-top: 0;

  h2 {
    margin: 0;
    padding: 10px;
    text-align: center;
  }
`;
