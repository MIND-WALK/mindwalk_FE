import React from "react";
import styled from "styled-components";

const ClickButtonSm = ({ onClick, className, text }) => {
  return (
    <Button type="button" onClick={onClick} className={className}>
      {text}
    </Button>
  );
};

export default ClickButtonSm;

const Button = styled.button`
  width: 11rem;
  height: 4.5rem;
  background: #fff;
  border-radius: 4rem;
  text-align: center;
  font-size: 1.4rem;
  cursor: pointer;
  &:hover {
    font-weight: bold;
    background: var(--sub-yellow-color);
  }
`;
