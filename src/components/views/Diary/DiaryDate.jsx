import React from "react";
import { styled } from "styled-components";

const DiaryDate = ({ date }) => {
  const formattedDate = new Date(Number(date));

  const year = formattedDate.getFullYear();
  const month = formattedDate.getMonth() + 1;
  const day = formattedDate.getDate();
  const dayOfWeek = formattedDate.toLocaleDateString("ko-KR", { weekday: "long" });

  const formattedDateString = `${year}년 ${month}월 ${day}일`;
  const formattedDay = dayOfWeek;

  return (
    <Container>
      <h1>{formattedDateString}</h1>
      <h2>{formattedDay}</h2>
    </Container>
  );
};

export default DiaryDate;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 1rem 0;
  & :first-of-type {
    font-size: 1.8rem;
  }
  & :last-of-type {
    font-size: 1.6rem;
    font-weight: light;
    color: #5f5f5f;
  }
`;
