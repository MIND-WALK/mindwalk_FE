import React from "react";
import { styled } from "styled-components";
import Calendar from "../../components/views/Diary/Calendar";
import ListDiary from "../../components/views/Diary/ListDiary";

const Diary = () => {
  return (
    <Container>
      <Calendar />
      <p className="diary-title">나의 기록</p>
      <ListDiary
        content="동해물과 백두산이 마르고 닳도록 하느님이 보우하사 우리 나라 만세 동해물과 백두산이 마르고 닳도록 하느님이 보우하사 우리 나라 만세 동해물과 백두산이 마르고 닳도록 하느님이 보우하사 우리 나라 만세 동해물과 백두산이 마르고 닳도록 하느님이 보우하사"
        emotion="happy"
        id={1}
        rating={3.5}
        date="1685325080943"
      />
      <ListDiary
        content="동해물과 백두산이 마르고 닳도록 하느님이 보우하사 우리 나라 만세 동해물과 백두산이 마르고 닳도록 하느님이 보우하사 우리 나라 만세 동해물과 백두산이 마르고 닳도록 하느님이 보우하사 우리 나라 만세 동해물과 백두산이 마르고 닳도록 하느님이 보우하사"
        emotion="sad"
        id={1}
        rating={3.5}
        date="1685325080943"
      />
      <ListDiary
        content="동해물과 백두산이 마르고 닳도록 하느님이 보우하사 우리 나라 만세 동해물과 백두산이 마르고 닳도록 하느님이 보우하사 우리 나라 만세 동해물과 백두산이 마르고 닳도록 하느님이 보우하사 우리 나라 만세 동해물과 백두산이 마르고 닳도록 하느님이 보우하사"
        emotion="natural"
        id={1}
        rating={3.5}
        date="1685325080943"
      />
      <ListDiary
        content="동해물과 백두산이 마르고 닳도록 하느님이 보우하사 우리 나라 만세 동해물과 백두산이 마르고 닳도록 하느님이 보우하사 우리 나라 만세 동해물과 백두산이 마르고 닳도록 하느님이 보우하사 우리 나라 만세 동해물과 백두산이 마르고 닳도록 하느님이 보우하사"
        emotion="surprise"
        id={1}
        rating={3.5}
        date="1685325080943"
      />
      <ListDiary
        content="동해물과 백두산이 마르고 닳도록 하느님이 보우하사 우리 나라 만세 동해물과 백두산이 마르고 닳도록 하느님이 보우하사 우리 나라 만세 동해물과 백두산이 마르고 닳도록 하느님이 보우하사 우리 나라 만세 동해물과 백두산이 마르고 닳도록 하느님이 보우하사"
        emotion="angry"
        id={1}
        rating={3.5}
        date="1685325080943"
      />
    </Container>
  );
};

export default Diary;

const Container = styled.div`
  font-size: 1.6rem;
  margin: auto 2rem;
  & > .diary-title {
    font-size: 1.8rem;
    font-weight: bold;
  }
`;
