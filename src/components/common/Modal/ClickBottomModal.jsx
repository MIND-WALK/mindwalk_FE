import React from "react";
import styled from "styled-components";

import ClickButtonSm from "../Buttons/ClickButtonSm";

const ClickBottomModal = ({
  modalText,
  buttonLeftText,
  buttonRightText,
  buttonLeftOnClick,
  buttonRightOnClick,
  modalOpen,
}) => {
  return (
    <>
      <ModalContainer className={modalOpen && "modalView"}>
        <Text>{modalText}</Text>
        <ButtonContainer>
          <ClickButtonSm buttonText={buttonLeftText} onClick={buttonLeftOnClick} />
          {buttonRightText && (
            <ClickButtonSm buttonText={buttonRightText} onClick={buttonRightOnClick} />
          )}
        </ButtonContainer>
      </ModalContainer>
      <ModalBackground className={modalOpen && "modalBackgroundView"} />
    </>
  );
};

export default ClickBottomModal;

const ModalContainer = styled.div`
  width: 100%;
  height: 17rem;
  padding: 3.7rem 0;
  background: var(--main-green-color);
  border-radius: 2rem 2rem 0 0;
  text-align: center;
  position: fixed;
  bottom: -17rem;
  left: 0;
  z-index: 99999;
  transition: 0.2s;
  &.modalView {
    bottom: 0;
  }
`;

const Text = styled.p`
  font-size: 1.8rem;
  font-weight: 700;
  color: #fff;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 2.4rem;
  gap: 1.7rem;
`;

const ModalBackground = styled.div`
  content: "";
  display: none;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.2);
  position: fixed;
  top: 0;
  left: 0;
  &.modalBackgroundView {
    display: block;
  }
`;
