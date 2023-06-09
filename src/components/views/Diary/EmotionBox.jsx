import React from "react";
import { styled } from "styled-components";
import HappyIcon from "../../common/CustomIcon/EmotionIcon/HappyIcon";
import SadIcon from "../../common/CustomIcon/EmotionIcon/SadIcon";
import NeutralIcon from "../../common/CustomIcon/EmotionIcon/NeutralIcon";
import AngryIcon from "../../common/CustomIcon/EmotionIcon/AngryIcon";
import SurprisedIcon from "../../common/CustomIcon/EmotionIcon/SurprisedIcon";

const emotions = [
  { name: "happy", icon: <HappyIcon size="5.5rem" />, color: "#F2ACCE" },
  { name: "sad", icon: <SadIcon size="5.2rem" />, color: "#8AB2E5" },
  { name: "neutral", icon: <NeutralIcon size="4.8rem" />, color: "#B3DAC1" },
  { name: "angry", icon: <AngryIcon size="4.5rem" />, color: "#DC6750" },
  { name: "surprised", icon: <SurprisedIcon size="5.3rem" />, color: "#FAEA94" },
];

const EmotionBox = ({ selectedEmotion, handleEmotionSelection }) => {
  const handleEmotionClick = (emotion, color) => {
    handleEmotionSelection(emotion, color);
  };

  return (
    <Container>
      {emotions.map(emotion => (
        <ButtonWrapper
          key={emotion.name}
          className={selectedEmotion === emotion.name ? "selected" : ""}
          onClick={() => handleEmotionClick(emotion.name, emotion.color)}
        >
          {emotion.icon}
        </ButtonWrapper>
      ))}
    </Container>
  );
};

export default EmotionBox;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  & .selected {
    transform: scale(1) translate3d(0, -0.7rem, 0);
    animation: bounce_frames 0.5s alternate cubic-bezier(0.5, 0.05, 1, 0.5) infinite;
  }

  @keyframes bounce_frames {
    from {
      transform: scale(1.2) translate3d(0, 0, 0);
    }
    to {
      transform: scale(1.2) translate3d(0, -0.7rem, 0);
    }
  }
`;
const ButtonWrapper = styled.span`
  display: inline-block;
`;
