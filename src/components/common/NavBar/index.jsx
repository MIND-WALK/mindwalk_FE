import React from "react";
import { styled } from "styled-components";
import { IoIosArrowBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";

const NavBar = ({ navText, menuTitle }) => {
  const navigate = useNavigate();
  const navLink = () => {
    navigate("/");
  };

  return (
    <Navbarcontainer>
      <Nav onClick={navLink}>
        <ArrowIcon>
          <IoIosArrowBack />
        </ArrowIcon>
        <NavText>{navText}</NavText>
      </Nav>

      <MenuTitle>{menuTitle}</MenuTitle>
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
