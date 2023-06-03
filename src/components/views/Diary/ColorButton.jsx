import React from "react";
import { styled } from "styled-components";

const ColorButton = ({ color, selectedColor, handleColorSelection }) => {
  return (
    <StyledButton
      type="button"
      name="color"
      value={color}
      color={color}
      style={{ backgroundColor: color }}
      className={selectedColor === color ? "selected" : ""}
      onClick={() => handleColorSelection(color)}
    />
  );
};

export default ColorButton;

const StyledButton = styled.button`
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  margin: 0.5rem;
  border: none;
  background-color: ${props => props.color};

  & .selected {
    border: 1px solid #000;
  }
`;
