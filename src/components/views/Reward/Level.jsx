import React from "react";
import { styled } from "styled-components";

export default function Level() {
  return (
    <Container>
      <LevelTop>
        <h3>현재 레벨</h3>
        <button>상품 교환하기</button>
      </LevelTop>
      <LevelBox>
        <LevelImage></LevelImage>
        <LevelText>Lv. 0</LevelText>
        <Point>3,200 point</Point>
      </LevelBox>
    </Container>
  );
}

const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 250px;
  background-color: #4dba6d;
  padding: 15px 20px 20px;
`;

const LevelTop = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;

  h3 {
    font-size: 14px;
  }
  button {
    font-size: 12px;
    color: #eee;
  }
`;

const LevelBox = styled.div`
  margin-top: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const LevelImage = styled.div`
  width: 122px;
  height: 122px;
  background-color: white;
  border-radius: 50%;

  img {
  }
`;

const LevelText = styled.p`
  margin-top: 15px;
  font-size: 20px;
  font-weight: bold;
`;

const Point = styled.p`
  margin-top: 8px;
  font-size: 14px;
`;
