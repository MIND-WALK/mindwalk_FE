import React from "react";
import { styled } from "styled-components";
import HappyIcon from "../../common/CustomIcon/EmotionIcon/HappyIcon";
import SadIcon from "../../common/CustomIcon/EmotionIcon/SadIcon";
import NaturalIcon from "../../common/CustomIcon/EmotionIcon/NaturalIcon";
import AngryIcon from "../../common/CustomIcon/EmotionIcon/AngryIcon";
import SurpriseIcon from "../../common/CustomIcon/EmotionIcon/SurpriseIcon";

const emotions = [
  { name: "happy", icon: <HappyIcon size="5.5rem" /> },
  { name: "sad", icon: <SadIcon size="5.2rem" /> },
  { name: "natural", icon: <NaturalIcon size="4.8rem" /> },
  { name: "angry", icon: <AngryIcon size="4.5rem" /> },
  { name: "surprise", icon: <SurpriseIcon size="5.3rem" /> },
];

const EmotionBox = ({ selectedEmotion, handleEmotionSelection }) => {
  const handleEmotionClick = emotion => {
    handleEmotionSelection(emotion);
  };

  return (
    <Container>
      {emotions.map(emotion => (
        <ButtonWrapper
          key={emotion.name}
          className={selectedEmotion === emotion.name ? "selected" : ""}
          onClick={() => handleEmotionClick(emotion.name)}
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