import React, { useState } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import Rating from "../../common/Rating/Rating";
import DiaryDate from "./DiaryDate";
import EmotionBox from "./EmtionBox";
import ClickButtonBig from "../../common/Buttons/ClickButtonBig";

const DiaryWrite = () => {
  const [selectedEmotion, setSelectedEmotion] = useState(null);
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");

  const { date } = useParams();

  const handleEmotionSelection = emotion => {
    setSelectedEmotion(emotion);
    console.log(emotion);
  };

  const handleRatingChange = newRating => {
    setRating(newRating);
  };

  const handleCommentChange = event => {
    setComment(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();

    if (selectedEmotion && rating && comment) {
      const data = {
        date,
        emotion: selectedEmotion,
        rating,
        comment,
      };

      console.log(data);
    } else {
      console.log("Please fill in all fields.");
    }
  };

  return (
    <Container>
      <DiaryDate date={date} />
      <DiaryContent>
        <p className="diary-title">오늘의 당신을 선택해주세요.</p>
        <EmotionBox
          selectedEmotion={selectedEmotion}
          handleEmotionSelection={handleEmotionSelection}
        />
      </DiaryContent>
      <DiaryContent>
        <p className="diary-title">오늘 챌린지의 만족도는 어땠나요?</p>
        <Rating setRating={handleRatingChange} rating={rating} />
      </DiaryContent>
      <DiaryContent>
        <p className="diary-title">오늘 하루는 어땠나요?</p>
        <textarea
          name="comment"
          value={comment}
          onChange={handleCommentChange}
          cols="30"
          rows="10"
        ></textarea>
      </DiaryContent>
      <ClickButtonBig
        onClick={handleSubmit}
        buttonClassName="writing-button"
        buttonText="등록하기"
      />
    </Container>
  );
};

export default DiaryWrite;

const Container = styled.div`
  margin: 0 2rem;
  font-size: 1.6rem;
  display: flex;
  flex-direction: column;

  & textarea {
    border-radius: 8;
    resize: none;
    width: 100%;
    height: 13rem;
    margin-bottom: 1rem;
  }
`;

const DiaryContent = styled.div`
  margin: 0.5rem 0;

  & .diary-title {
    margin: 1rem 0;
  }
`;
