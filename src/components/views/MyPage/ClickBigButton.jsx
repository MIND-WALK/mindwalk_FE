import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { IoIosArrowForward } from "react-icons/io";

const ClickBigButton = ({ link, icon, text }) => {
  const navigate = useNavigate();

  const goToLink = () => {
    navigate(link);
  };

  return (
    <Button type="button" onClick={goToLink}>
      <LeftContent>
        <Icon>{icon}</Icon>
        <Text>{text}</Text>
      </LeftContent>
      <Div>
        <IoIosArrowForward />
      </Div>
    </Button>
  );
};

export default ClickBigButton;

const Button = styled.button`
  width: 33.5rem;
  height: 5.6rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 3rem;
  background: #fff;
  color: var(--sub-green-color);
  border-radius: 4rem;
  font-size: 1.6rem;
  font-weight: bold;
  margin: 0 auto;
  &:hover {
    font-weight: bold;
    background: var(--sub-yellow-color);
  }
`;
const LeftContent = styled.div`
  display: flex;
  gap: 2.3rem;
  align-items: center;
`;
const Div = styled.div`
  align-items: center;
  padding-top: 0.8rem;
`;
const Icon = styled.p`
  font-size: 2.4rem;
  padding-top: 0.8rem;
`;
const Text = styled.p`
  padding-top: 0.3rem;
`;
