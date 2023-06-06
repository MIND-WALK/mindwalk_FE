import React from "react";
import { styled } from "styled-components";

const Loading = () => {
  return (
    <Container>
      <div className="loading"></div>
    </Container>
  );
};

export default Loading;

const Container = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  & .loading {
    border: 9px solid var(--main-green-color);
    border-radius: 50%;
    border-color: var(--main-green-color) var(--main-green-color) var(--main-green-color)
      transparent;
    width: 80px;
    height: 80px;
    animation: spinning 1s linear infinite;

    @keyframes spinning {
      from {
        transform: rotate(0);
      }
      to {
        transform: rotate(360deg);
      }
    }
  }
`;
