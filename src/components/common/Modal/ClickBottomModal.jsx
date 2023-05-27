import React from "react";
import styled from "styled-components";

import ClickButtonSm from "../Buttons/ClickButtonSm";

const ClickBottomModal = ({ modalClassName, modalText, buttonLeftText, buttonRightText }) => {
  return (
    <ModalContainer className={modalClassName}>
      <Text>{modalText}</Text>
      <ButtonContainer>
        <ClickButtonSm buttonText={buttonLeftText} />
        <ClickButtonSm buttonText={buttonRightText} />
      </ButtonContainer>
    </ModalContainer>
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
  bottom: 0;
  z-index: 999;
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
