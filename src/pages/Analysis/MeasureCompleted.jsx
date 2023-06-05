import React, { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";
import { useNavigate } from "react-router-dom";
import { AiFillRobot } from "react-icons/ai";
import { BsHandIndexThumbFill } from "react-icons/bs";
import Slider from "../../components/common/Slider";
import CompleteModal from "../../components/common/Modal/CompleteModal";

const MeasureCompleted = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const navigate = useNavigate();

  const handleButtonClick = page => {
    navigate(`/${page}`);
  };
  const handleCloseModal = () => {
    setModalOpen(false);
    document.documentElement.style.overflow = "auto";
  };
  const handleClickHome = () => {
    setModalOpen(false);
    navigate("/");
    document.documentElement.style.overflow = "auto";
  };
  const handleClickDiary = () => {
    setModalOpen(false);
    navigate("/my_page");
    document.documentElement.style.overflow = "auto";
  };

  useEffect(() => {
    setModalOpen(true);
    document.documentElement.style.overflow = "hidden";
  }, []);

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
        <Button onClick={() => handleButtonClick("analysis")}>
          <SelfIcon />
          자가 측정
        </Button>
      </ButtonWrapper>
      {modalOpen && (
        <CompleteModal
          buttonLeftText="홈으로 가기"
          buttonRightText="감정일기 쓰기"
          modalOpen={modalOpen}
          buttonLeftOnClick={handleClickHome}
          buttonRightOnClick={handleClickDiary}
          completeTextTop="오늘의 감정"
          completeTextMiddle="이미 분석 완료!"
          completeTextBottom="일기를 쓰러가거나 챌린지를 하러가요."
        />
      )}
    </Container>
  );
};

export default MeasureCompleted;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: var(--sub-green-color);
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
  text-alig8n: center;
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
  top: 15%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 80%;
  text-align: center;
`;

const TextTop = styled.p`
  font-size: 2rem;
  font-weight: 700;
  color: #fff;
`;

const TextBottom = styled.p`
  margin-top: 1rem;
  font-size: 1.5rem;
  font-weight: 600;
  color: #ccc;
`;
