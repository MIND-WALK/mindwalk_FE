import React from "react";
import { useNavigate } from "react-router-dom";
import { styled } from "styled-components";
import { useEmotion } from "../../../hooks/useEmotion";

const ListDiary = ({ diary, date, color }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    const linkPath = `/diary/test/${date}`;
    navigate(linkPath);
  };

  return (
    <Container>
      <div onClick={handleClick}>
        {diary ? (
          <div className="content-container">
            <div className="color-box">{useEmotion(color)}</div>
            <div className="content-box">
              <div>{diary || null}</div>
            </div>
          </div>
        ) : null}
      </div>
    </Container>
  );
};

export default ListDiary;

const Container = styled.div`
  .content-container {
    border: 1px solid #000;
    margin: 1rem 0;
    width: 100%;
    height: 8.1rem;
    display: grid;
    grid-template-columns: 1fr 4fr;
    grid-gap: 0.5rem;

    align-items: center;
    border-radius: 0.8rem;
    .color-box {
      text-align: center;
    }

    .content-box {
      background-color: #f3f6fa;
      padding: 1.5rem 1rem 1.5rem 2rem;
      border-radius: 0 0.8rem 0.8rem 0;
      & > div {
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        word-break: keep-all;
      }
    }
  }
`;
