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
        <NavText></NavText>
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
  padding: 0 2rem;
`;

const Nav = styled.div`
  display: flex;
  cursor: pointer;
  gap: 0.7rem;
`;

const ArrowIcon = styled.p`
  font-size: 1.6rem;
  padding-top: 0.2rem;
`;

const NavText = styled.p``;
const MenuTitle = styled.p`
  width: 80%;
  text-align: center;
`;
