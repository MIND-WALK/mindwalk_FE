import React from "react";
import styled from "styled-components";

const ClickButtonBig = ({ onClick, buttonClassName, buttonText }) => {
  return (
    <Button type="button" onClick={onClick} className={buttonClassName}>
      {buttonText}
    </Button>
  );
};

export default ClickButtonBig;

const Button = styled.button`
  width: 30rem;
  height: 4.5rem;
  background: var(--sub-green-color);
  border-radius: 4rem;
  text-align: center;
  position: fixed;
  bottom: 7rem;
  left: 50%;
  transform: translateX(-50%);
  font-size: 1.6rem;
  font-weight: bold;
  color: #fff;
  cursor: pointer;
  &:hover {
    font-weight: bold;
    background: var(--sub-yellow-color);
    transition: 0.5s;
    color: var(--sub-green-color);
  }
`;
