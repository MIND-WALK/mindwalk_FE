import React from "react";
import { styled } from "styled-components";
import { IoIosArrowBack } from "react-icons/io";
import { useLocation, useNavigate } from "react-router-dom";
import PATHNAME_TITLE_MAP from "../../../constants/pathnameTitleMap";

const NavBar = () => {
  const pathname = useLocation().pathname.slice(1);
  const navigate = useNavigate();

  const navLink = () => {
    navigate("/");
  };

  return (
    <Navbarcontainer>
      <Nav onClick={() => navigate(-1)}>
        <ArrowIcon>
          <IoIosArrowBack />
        </ArrowIcon>
      </Nav>
      <MenuTitle>{PATHNAME_TITLE_MAP[pathname]}</MenuTitle>
    </Navbarcontainer>
  );
};

export default NavBar;

const Navbarcontainer = styled.div`
  height: 5rem;
  background: #fff;
  display: flex;
  font-size: 1.6rem;
  align-items: center;
  margin: auto 2rem;
  justify-content: space-between;
`;

const Nav = styled.div`
  cursor: pointer;
`;

const ArrowIcon = styled.p`
  font-size: 1.6rem;
  padding-top: 0.2rem;
`;

const MenuTitle = styled.p`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
`;
