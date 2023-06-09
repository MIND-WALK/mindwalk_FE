import React from "react";
import { styled } from "styled-components";
import Calendar from "./Calendar";

const NoDiary = () => {
  return (
    <Container>
      <Calendar colorData={[]} />
      <p className="diary-title">나의 기록</p>
      <div className="diary-box">
        작성한 일기가 없습니다. <br />
        오늘의 감정일기를 작성해보세요!
      </div>
    </Container>
  );
};

export default NoDiary;

const Container = styled.div`
  font-size: 1.6rem;
  margin: auto 2rem;

  & .diary-box {
    text-align: center;
  }

  & > .diary-title {
    font-size: 1.8rem;
    font-weight: bold;
    margin-bottom: 2rem;
  }
`;
