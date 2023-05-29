import React from "react";
import styled from "styled-components";
import ColorButton from "./ColorButton";

const ColorBox = ({ selectedColor, handleColorSelection }) => {
  return (
    <Container>
      <ColorButton
        color="#f3e8a9"
        selectedColor={selectedColor}
        handleColorSelection={handleColorSelection}
      />
      <ColorButton
        color="#9ae2af"
        selectedColor={selectedColor}
        handleColorSelection={handleColorSelection}
      />
      <ColorButton
        color="#f4c0aa"
        selectedColor={selectedColor}
        handleColorSelection={handleColorSelection}
      />
      <ColorButton
        color="#98daef"
        selectedColor={selectedColor}
        handleColorSelection={handleColorSelection}
      />
      <ColorButton
        color="#d9bdfd"
        selectedColor={selectedColor}
        handleColorSelection={handleColorSelection}
      />
    </Container>
  );
};

export default ColorBox;

const Container = styled.div`
  & button {
    width: 3rem;
    height: 3rem;
    border-radius: 50%;
    margin: 0.5rem;
    border: none;
  }

  & button.selected {
    border: 1px solid #000;
  }
`;
