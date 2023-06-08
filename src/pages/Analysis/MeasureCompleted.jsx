import React, { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";
import { useNavigate } from "react-router-dom";
import { AiFillRobot } from "react-icons/ai";
import { BsHandIndexThumbFill } from "react-icons/bs";
import Slider from "../../components/common/Slider";
import CompleteModal from "../../components/common/Modal/CompleteModal";
import HappyCard from "../../components/common/CustomIcon/EmotionCard/HappyCard";

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
    navigate("/home");
    document.documentElement.style.overflow = "auto";
  };
  const handleClickDiary = () => {
    setModalOpen(false);
    navigate("/diary");
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
  height: 100%;
  padding-top: 3rem;
  background-color: var(--sub-green-color);
  & .emotion-select-contaner {
    margin: auto 2rem;
  }
`;

const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  background-color: var(--sub-green-color);
  gap: 2rem;
  padding-top: 5rem;
  padding-bottom: 10rem;
`;

const Button = styled.button`
  margin: 1rem;
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
    background-color: var(--sub-yellow-color);
    color: var(--sub-green-color);
  }
  color: var(--sub-green-color);
  border: none;
  cursor: pointer;
  text-align: center;
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
  text-align: center;
`;

const TextTop = styled.p`
  font-size: 2rem;
  font-weight: 700;
  color: #fff;
`;

const TextBottom = styled.p`
  font-size: 1.5rem;
  font-weight: lighter;
  color: #ffffff;
`;
