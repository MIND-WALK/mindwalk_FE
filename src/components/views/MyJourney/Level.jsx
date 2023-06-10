import React from "react";
import { styled } from "styled-components";
import { BsChevronRight } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import LEVEL from "../../../constants/level";
import Level1 from "../../common/CustomIcon/UserIcon/Level1";
import Level2 from "../../common/CustomIcon/UserIcon/Level2";
import Level3 from "../../common/CustomIcon/UserIcon/Level3";
import Level4 from "../../common/CustomIcon/UserIcon/Level4";
import Level5 from "../../common/CustomIcon/UserIcon/Level5";

const Level = ({ level }) => {
  const navigate = useNavigate();

  const goToCompletedJourneyPage = () => navigate("/my_journey/completed");

  return (
    <Container>
      <LevelTop>
        <Title>현재 레벨</Title>
        <Button onClick={goToCompletedJourneyPage}>
          완수 여정 목록
          <BsChevronRight color="#7b7b7b" />
        </Button>
      </LevelTop>
      <LevelBox>
        <LevelImage>{getLevelIcon(level, "10rem")}</LevelImage>
        <LevelText>Lv. {level}</LevelText>
      </LevelBox>
    </Container>
  );
};

export default Level;

export const getLevelIcon = (levelNum, size) => {
  switch (levelNum) {
    case 1:
      return <Level1 size={size} />;
    case 2:
      return <Level2 size={size} />;
    case 3:
      return <Level3 size={size} />;
    case 4:
      return <Level4 size={size} />;
    case 5:
      return <Level5 size={size} />;
    default:
      return <Level1 size={size} />;
  }
};

const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 250px;
  background-color: var(--main-green-color);
  padding: 15px 20px 20px;
`;

const LevelTop = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;

  button {
    font-size: 12px;
    color: #eee;
  }
`;

export const Title = styled.h3`
  width: 100%;
  font-size: 1.4rem;
`;

const LevelBox = styled.div`
  margin-top: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const LevelImage = styled.div`
  width: 122px;
  height: 122px;
  background-color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 50%;
  }
`;

const LevelText = styled.p`
  margin-top: 13px;
  font-size: 2rem;
  font-weight: bold;
`;

const Button = styled.button`
  display: flex;
  align-items: center;
  gap: 5px;
`;
