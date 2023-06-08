import React from "react";
import styled from "styled-components";
import AngryCard from "../../../assets/emotion/card/angry-card.svg";
import HappyCard from "../../../assets/emotion/card/happy-card.svg";
import NaturalCard from "../../../assets/emotion/card/natural-card.svg";
import SadCard from "../../../assets/emotion/card/sad-card.svg";
import SurpriseCard from "../../../assets/emotion/card/surprise-card.svg";
import useSlide from "../../../hooks/useSlide";

const Slide = () => {
  const images = [
    { emotion: "angry", icon: <AngryCard size="12rem" /> },
    { emotion: "happy", icon: <HappyCard size="12rem" /> },
    { emotion: "neutral", icon: <NaturalCard size="12rem" /> },
    { emotion: "sad", icon: <SadCard size="12rem" /> },
    { emotion: "surprised", icon: <SurpriseCard size="12rem" /> },
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
  height: 300px;
`;

const SliderItem = styled.div`
  display: ${({ active }) => (active ? "block" : "none")};
`;

const SliderImage = styled.div`
  width: 100%;
  height: auto;

  svg {
    width: 100%;
    height: auto;
  }
`;
