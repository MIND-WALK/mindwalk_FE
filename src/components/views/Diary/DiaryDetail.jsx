import React from "react";
import { styled } from "styled-components";
import DiaryDate from "./DiaryDate";
import RatedScore from "../../common/Rating/RatedScore";

const DiaryDetail = ({ rating, date, content, color }) => {
  const handleEdit = () => {};
  const handleDelete = () => {};
  return (
    <Container>
      <DiaryDate date={date} />
      <RatedScore rating={rating} />
      <div className="content-box" style={{ backgroundColor: color }}>
        {content}
      </div>
      <div className="button-box">
        <button type="button" onClick={handleEdit}>
          수정하기
        </button>
        <button type="button" onClick={handleDelete}>
          삭제하기
        </button>
      </div>
    </Container>
  );
};

export default DiaryDetail;

const Container = styled.div`
  margin: auto 2rem;
  font-size: 1.6rem;

  & .content-box {
    width: 100%;
    padding: 1rem;
    border: 1px solid #000;
    background-color: ${props => props.color};
  }

  & .button-box {
    display: flex;
    justify-content: center;

    & button {
      font-size: 1.4rem;
      border: 1px solid #000;
      padding: 1rem 3.5rem;
      border-radius: 5rem;
      margin: 2rem 0.5rem;

      &:hover {
        background-color: var(--sub-green-color);
        border-color: transparent;
        color: #fff;
      }
    }
  }
`;
