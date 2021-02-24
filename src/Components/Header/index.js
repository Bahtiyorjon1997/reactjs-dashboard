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
      <IconButton
        onClick={() => {
          setHide(!hide);
        }}
        className="ml-2"
      >
        <GiHamburgerMenu />
      </IconButton>

      <FiCalendar style={{ padding: "1rem 0 1rem 1rem" }} />

      <FiMessageSquare style={{ padding: "1rem 0 1rem 1rem" }} />

      <FiMail style={{ padding: "1rem 0 1rem 1rem" }} />

      <FiCheckSquare style={{ padding: "1rem 0 1rem 1rem" }} />

      <FiStar style={{ padding: "1rem 0 1rem 1rem", color: "#ff9f4" }} />
    </HeaderWrapper>
  );
};
export default Header;

const HeaderWrapper = styled.div`
  height: 60px;
  width: 100%;
  background-color: white;
  font-size: 22px;
  border-radius: 5px;
  position: sticky;
  top: 30px;
  text-align: left;
  margin-bottom: 1rem;
  padding-top: 0;
  margin-top: 0;

  display: flex;
  align-items: center;

  h2 {
    margin: 0;
    padding: 10px;
    text-align: center;
  }
`;
