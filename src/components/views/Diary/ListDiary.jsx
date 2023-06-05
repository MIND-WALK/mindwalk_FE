import React from "react";
import { Link } from "react-router-dom";
import { styled } from "styled-components";

const ListDiary = ({ content, color, id, rating, date }) => {
  return (
    <Container>
      <Link to={`/diary/${id}?rating=${rating}&date=${date}&content=${content}&color=${color}`}>
        <p>나의 기록</p>
        {content ? (
          <div className="content-container">
            <div className="color-box" style={{ backgroundColor: color }}></div>
            <div className="content-box">{content || null}</div>
          </div>
        ) : null}
      </Link>
    </Container>
  );
};

export default ListDiary;

const Container = styled.div`
  font-size: 1.6rem;
  margin: auto 2rem;
  & > p {
    font-size: 1.8rem;
    font-weight: bold;
  }
  .content-container {
    border: 1px solid #000;
    padding: 1rem;
    margin: 1rem 0;
    width: 100%;
    height: 9.1rem;
    display: grid;
    grid-template-columns: 1fr 4fr;
    grid-gap: 1rem;
    align-items: center;
    .color-box {
      width: 5.4rem;
      height: 5.4rem;
      border-radius: 50%;
      background-color: ${props => props.color};
      margin-right: 1rem;
    }

    .content-box {
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      word-break: keep-all;
    }
  }
`;
