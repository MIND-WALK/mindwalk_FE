import React, { useState } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import Rating from "../../common/Rating/Rating";
import ColorBox from "./ColorBox";
import DiaryDate from "./DiaryDate";

const DiaryWrite = () => {
  const [selectedColor, setSelectedColor] = useState(null);
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");

  const { date } = useParams();

  const handleColorSelection = color => {
    setSelectedColor(color);
  };

  const handleRatingChange = newRating => {
    setRating(newRating);
  };

  const handleCommentChange = event => {
    setComment(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();

    if (selectedColor && rating && comment) {
      const data = {
        color: selectedColor,
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
        <p className="diary-title">당신의 하루는 어떤 색깔인가요?</p>
        <ColorBox selectedColor={selectedColor} handleColorSelection={handleColorSelection} />
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
      <button type="button" onClick={handleSubmit} className="writing-button">
        등록하기
      </button>
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
    border-radius: 0;
    resize: none;
    width: 100%;
    height: 13rem;
    margin-bottom: 1rem;
  }

  & .writing-button {
    font-size: 1.4rem;
    border: 1px solid #000;
    padding: 1rem 3.5rem;
    border-radius: 5rem;
    margin: 0 auto;

    &:hover {
      background-color: var(--sub-green-color);
      border-color: transparent;
      color: #fff;
    }
  }
`;

const DiaryContent = styled.div`
  margin: 0.5rem 0;

  & .diary-title {
    margin: 1rem 0;
  }
`;
