import React, { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";
import Angry from "../../../assets/emotion/card/angry-card.svg";
import Happy from "../../../assets/emotion/card/happy-card.svg";
import Neutral from "../../../assets/emotion/card/neutral-card.svg";
import Sad from "../../../assets/emotion/card/sad-card.svg";
import Surprised from "../../../assets/emotion/card/surprised-card.svg";

const images = [Angry, Happy, Neutral, Sad, Surprised];

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prevIndex => (prevIndex + 1) % images.length);
    }, 2000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <Container>
      {images.map((image, index) => (
        <SliderImage
          key={index}
          src={image}
          alt={`Slider Image ${index + 1}`}
          position={index - currentIndex}
        />
      ))}
    </Container>
  );
};

export default Slider;

const Container = styled.div`
  position: fixed;
  top: 21%;
  width: 100%;
  height: 25rem;
  overflow: hidden;
`;

const slideAnimation = keyframes`
  /* 0% {
    opacity: 0.2;
    transform: scale(0.8);
  }
  20% {
    opacity: 1;
    transform: scale(1);
  }
  80% {
    opacity: 1;
    transform: scale(1);
  }
  100% {
    opacity: 0.2;
    transform: scale(0.8);
  } */
`;

const SliderImage = styled.img`
  position: fixed;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 16rem;
  height: 20rem;
  object-fit: contain;
  animation: ${slideAnimation} 20s linear infinite;
  opacity: ${props => (Math.abs(props.position) === 0 ? 1 : 0.2)};
  z-index: ${props => (Math.abs(props.position) === 0 ? 1 : 0)};
  transition: opacity 0.2s;
  border: 1px solid var(--sub-green-color);
  border-radius: 1rem;
  background-color: #fff;
`;
