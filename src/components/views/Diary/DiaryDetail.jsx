import React from "react";
import { styled } from "styled-components";
import { useLocation, useParams } from "react-router-dom";
import DiaryDate from "./DiaryDate";
import RatedScore from "../../common/Rating/RatedScore";
import HappyIcon from "../../common/CustomIcon/EmotionIcon/HappyIcon";
import SadIcon from "../../common/CustomIcon/EmotionIcon/SadIcon";
import SurpriseIcon from "../../common/CustomIcon/EmotionIcon/SurpriseIcon";
import AngryIcon from "../../common/CustomIcon/EmotionIcon/AngryIcon";
import NaturalIcon from "../../common/CustomIcon/EmotionIcon/NaturalIcon";

const DiaryDetail = () => {
  const handleEdit = () => {};
  const handleDelete = () => {};
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);

  const rating = searchParams.get("rating");
  const date = searchParams.get("date");
  const content = searchParams.get("content");
  const emotion = searchParams.get("emotion");

  const renderEmotionIcon = () => {
    if (emotion === "happy") {
      return <HappyIcon size="9rem" />;
    }
    if (emotion === "sad") {
      return <SadIcon size="9rem" />;
    }
    if (emotion === "natural") {
      return <NaturalIcon size="9rem" />;
    }
    if (emotion === "angry") {
      return <AngryIcon size="9rem" />;
    }
    if (emotion === "surprise") {
      return <SurpriseIcon size="9rem" />;
    }
    return null; // 다른 경우에는 아이콘을 렌더링하지 않음
  };
  return (
    <Container>
      <EmotionContainer>{renderEmotionIcon()} </EmotionContainer>
      <DiaryDate date={date} />
      <RatedScore rating={rating} />
      <div className="content-box">{content}</div>
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
    padding: 1.6rem;
    border: 1px solid #000;
    border-radius: 0.8rem;
  }

  & .button-box {
    display: flex;
    justify-content: center;

    & button {
      font-size: 1.4rem;
      color: #fff;
      background-color: var(--sub-green-color);
      padding: 1rem 3.5rem;
      border-radius: 5rem;
      margin: 2rem 0.5rem;

      &:hover {
        background-color: var(--sub-yellow-color);
        border-color: transparent;
        color: var(--sub-green-color);
      }
    }
  }
`;

const EmotionContainer = styled.div`
  display: flex;
  justify-content: center;
`;
