import React from "react";
import { Link } from "react-router-dom";
import { styled } from "styled-components";
import HappyIcon from "../../common/CustomIcon/EmotionIcon/HappyIcon";
import SadIcon from "../../common/CustomIcon/EmotionIcon/SadIcon";
import SurpriseIcon from "../../common/CustomIcon/EmotionIcon/SurpriseIcon";
import AngryIcon from "../../common/CustomIcon/EmotionIcon/AngryIcon";
import NaturalIcon from "../../common/CustomIcon/EmotionIcon/NaturalIcon";

const ListDiary = ({ content, emotion, id, rating, date }) => {
  const renderEmotionIcon = () => {
    if (emotion === "happy") {
      return <HappyIcon size="6.7rem" />;
    }
    if (emotion === "sad") {
      return <SadIcon size="6.7rem" />;
    }
    if (emotion === "natural") {
      return <NaturalIcon size="5.7rem" />;
    }
    if (emotion === "angry") {
      return <AngryIcon size="5.7rem" />;
    }
    if (emotion === "surprise") {
      return <SurpriseIcon size="6.7rem" />;
    }
    return null; // 다른 경우에는 아이콘을 렌더링하지 않음
  };

  return (
    <Container>
      <Link to={`/diary/${id}?rating=${rating}&date=${date}&content=${content}&emotion=${emotion}`}>
        {content ? (
          <div className="content-container">
            <div className="color-box">{renderEmotionIcon()}</div>
            <div className="content-box">
              <div>{content || null}</div>
            </div>
          </div>
        ) : null}
      </Link>
    </Container>
  );
};

export default ListDiary;

const Container = styled.div`
  .content-container {
    border: 1px solid #000;
    margin: 1rem 0;
    width: 100%;
    height: 9.1rem;
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
      padding: 2rem 1rem 2rem 2rem;
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
