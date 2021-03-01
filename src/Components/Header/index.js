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
        <span>
          <FiCalendar />
        </span>

        <span>
          <FiMessageSquare />
        </span>

        <span>
          <FiMail />
        </span>

        <span>
          <FiCheckSquare />
        </span>

        <span>
          <FiStar />
        </span>
      </LeftIconWrapper>
      <RightIconWrapper>
        <span>
          <FiCalendar />
        </span>

        <span>
          <FiMessageSquare />
        </span>

        <span>
          <FiMail />
        </span>

        <span>
          <FiCheckSquare />
        </span>

        <span>
          <FiStar />
        </span>
      </RightIconWrapper>
    </HeaderWrapper>
  );
};
export default Header;

const ShadowWrapper = styled.div`
  width: 100%;
`;

const LeftIconWrapper = styled.div`
  display: flex;
  padding-left: 15px;
  align-items: center;
`;
const RightIconWrapper = styled.div`
  display: flex;
  padding-right: 30px;
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
  box-shadow: 0 10px 20px -4px #00002222;

  h2 {
    margin: 0;
    padding: 10px;
    text-align: center;
  }
  span {
    padding-left: 12px;
  }
`;
