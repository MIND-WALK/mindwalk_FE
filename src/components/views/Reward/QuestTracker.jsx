import React from "react";
import { styled } from "styled-components";
import { MdOutlineEmojiEvents, MdWebAsset } from "react-icons/md";

export default function QuestTracker() {
  return (
    <Container>
      <CountBox>
        <MdOutlineEmojiEvents size="24px" />
        <div>
          <p>완수한 여정</p>
          <Count>10개</Count>
        </div>
      </CountBox>
      <Line></Line>
      <CountBox>
        <MdWebAsset size="24px" />
        <div>
          <p>다음 레벨까지 남은 여정</p>
          <Count>10개</Count>
        </div>
      </CountBox>
    </Container>
  );
}

const Container = styled.section`
  display: flex;
  align-items: center;
  gap: 40px;
  width: 100%;
  padding: 15px 20px;
  border-bottom: 1px solid #d9d9d9;
`;

const CountBox = styled.div`
  font-size: 12px;
  display: flex;
  align-items: center;
  gap: 14px;
`;

const Count = styled.p`
  font-weight: bold;
  margin-top: 5px;
`;

const Line = styled.div`
  width: 1px;
  height: 40px;
  background-color: #d9d9d9;
`;
