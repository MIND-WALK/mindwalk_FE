import React from "react";
import styled, { keyframes } from "styled-components";
import { useNavigate } from "react-router-dom";
import { AiFillRobot } from "react-icons/ai";
import { BsHandIndexThumbFill } from "react-icons/bs";
import Slider from "../../components/common/Slider";

const MeasureSelect = () => {
  const navigate = useNavigate();

  const handleButtonClick = page => {
    navigate(`/${page}`);
  };

  return (
    <Container>
      <TextWrapper>
        <TextTop>오늘의 감정을 측정해보세요.</TextTop>
        <TextBottom>오늘 당신의 감정은 어떤가요?</TextBottom>
      </TextWrapper>
      <Slider />
      <ButtonWrapper>
        <Button onClick={() => handleButtonClick("analysis")}>
          <AiIcon />
          AI 측정
        </Button>
        <Button oonClick={() => handleButtonClick("measure")}>
          <SelfIcon />
          자가 측정
        </Button>
      </ButtonWrapper>
    </Container>
  );
};

export default MeasureSelect;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 65%;
  width: 100%;
  height: 13%;
  background-color: var(--sub-green-color);
`;

const ButtonAnimation = keyframes`
  from {
    transform: scale(1);
  }
  to {
    transform: scale(1.1);
  }
`;

const Button = styled.button`
  margin: 1rem;
  font-size: 2rem;
  background-color: #fff;
  color: var(--sub-green-color);
  border: none;
  border-radius: 3rem;
  width: 15rem;
  height: 10rem;
  cursor: pointer;
  transition: transform 0.2s ease-in-out;
  text-align: center;
  &:hover {
    animation: ${ButtonAnimation} 0.2s forwards;
    background-color: var(--sub-yellow-color);
    color: var(--sub-green-color);
  }
`;

const AiIcon = styled(AiFillRobot)`
  font-size: 2rem;
  margin-right: 0.625rem;
`;
const SelfIcon = styled(BsHandIndexThumbFill)`
  font-size: 2rem;
  margin-right: 0.625rem;
`;

const TextWrapper = styled.div`
  position: fixed;
  top: 10%;
  width: 100%;
  height: 90%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--sub-green-color);
`;

const TextTop = styled.p`
  font-size: 2rem;
  position: fixed;
  top: 13%;
  font-weight: 700;
  color: #fff;
`;

const TextBottom = styled.p`
  position: fixed;
  top: 18%;
  font-size: 1.5rem;
  font-weight: 600;
  color: #ccc;
`;
