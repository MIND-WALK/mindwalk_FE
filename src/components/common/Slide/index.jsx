import React from "react";
import styled from "styled-components";
import useSlide from "../../../hooks/useSlide";
import AngryCard from "../CustomIcon/EmotionCard/AngryCard";
import HappyCard from "../CustomIcon/EmotionCard/HappyCard";
import NaturalCard from "../CustomIcon/EmotionCard/NaturalCard";
import SadCard from "../CustomIcon/EmotionCard/SadCard";
import SurpriseCard from "../CustomIcon/EmotionCard/SurpriseCard";

//
const Slide = () => {
  const images = [
    { emotion: "angry", icon: <AngryCard size="23rem" /> },
    { emotion: "happy", icon: <HappyCard size="23rem" /> },
    { emotion: "neutral", icon: <NaturalCard size="23rem" /> },
    { emotion: "sad", icon: <SadCard size="23rem" /> },
    { emotion: "surprised", icon: <SurpriseCard size="23rem" /> },
  ];

  const slideIndex = useSlide(images.length);

  return (
    <SliderContainer>
      {images.map((image, index) => (
        <SliderItem key={index} active={index === slideIndex}>
          <SliderImage>{image.icon}</SliderImage>
        </SliderItem>
      ))}
    </SliderContainer>
  );
};

export default Slide;

const SliderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 25rem;
  padding-top: 3rem;
  cursor: none;
`;

const SliderItem = styled.div`
  display: ${({ active }) => (active ? "block" : "none")};
`;

const SliderImage = styled.div`
  width: 100%;
  height: auto;

  svg {
    width: 100%;
    height: 30rem;
  }
`;
