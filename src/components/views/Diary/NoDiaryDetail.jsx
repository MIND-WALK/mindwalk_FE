import React from "react";
import { styled } from "styled-components";

const NoDiaryDetail = () => {
  return (
    <Container>
      <div className="diary-box">
        작성한 일기가 없습니다. <br />
        오늘의 감정일기를 작성해보세요!
      </div>
    </Container>
  );
};

export default NoDiaryDetail;

const Container = styled.div`
  font-size: 1.6rem;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  width: 100%;

  & > .diary-title {
    font-size: 1.8rem;
    font-weight: bold;
    margin-bottom: 2rem;
  }
`;
