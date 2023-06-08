import React from "react";
import styled from "styled-components";
import { AiOutlineSmile } from "react-icons/ai";
import ClickButtonSm from "../Buttons/ClickButtonSm";

const CompleteModal = ({
  modalText,
  buttonLeftText,
  buttonRightText,
  buttonLeftOnClick,
  buttonRightOnClick,
  modalOpen,
  completeTextTop,
  completeTextMiddle,
  completeTextBottom,
}) => {
  return (
    <>
      <TextContainer>
        <TextTop>{completeTextTop}</TextTop>
        <TextMiddle>{completeTextMiddle}</TextMiddle>
        <SmileIcon />
        <TextBottom>{completeTextBottom}</TextBottom>
      </TextContainer>
      <ModalContainer className={modalOpen && "modalView"}>
        <Text>{modalText}</Text>
        <ButtonContainer>
          <ClickButtonSm buttonText={buttonLeftText} onClick={buttonLeftOnClick} />
          <ClickButtonSm buttonText={buttonRightText} onClick={buttonRightOnClick} />
        </ButtonContainer>
      </ModalContainer>
      <ModalBackground className={modalOpen && "modalBackgroundView"} />
    </>
  );
};

export default CompleteModal;

const ModalContainer = styled.div`
  width: 100%;
  height: 17rem;
  padding: 3.7rem 0;
  background: var(--main-green-color);
  border-radius: 2rem 2rem 0 0;
  text-align: center;
  position: fixed;
  bottom: -17rem;
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
  background: rgba(0, 0, 0, 0.8);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9999;
  &.modalBackgroundView {
    display: block;
  }
`;

const TextContainer = styled.div`
  width: 100%;
  height: 17rem;
  padding: 3.7rem 0;
  text-align: center;
  position: fixed;
  z-index: 99999;
  top: 15rem;
  transition: 0.2s;
  &.modalView {
    bottom: 15rem;
  }
`;

const TextTop = styled.p`
  font-size: 2.5rem;
  font-weight: 500;
  color: #fff;
`;
const TextMiddle = styled.p`
  font-size: 1.85rem;
  font-weight: 500;
  color: #fff;
  margin-top: 1rem;
`;
const TextBottom = styled.p`
  font-size: 1.5rem;
  font-weight: 500;
  color: #fff;
  margin-top: 3rem;
`;

const SmileIcon = styled(AiOutlineSmile)`
  font-size: 5rem;
  color: #fff;
  margin-top: 1rem;
`;
