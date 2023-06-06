import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useNavigate, useParams } from "react-router-dom";
import Rating from "../../common/Rating/Rating";
import DiaryDate from "./DiaryDate";
import EmotionBox from "./EmtionBox";
import ClickButtonBig from "../../common/Buttons/ClickButtonBig";
import { createDiary, updateDiary } from "../../../apis/diary";
import { useDiary } from "../../../hooks/queries/useDiary";

const DiaryWrite = () => {
  const [selectedEmotion, setSelectedEmotion] = useState(null);
  const [selectedColor, setSelectedColor] = useState(null);
  const [score, setScore] = useState(0);
  const [diary, setDiary] = useState("");
  const [error, setError] = useState(false);

  const navigate = useNavigate();
  const { date } = useParams();

  const userId = "test";

  const { data: diaryData, isLoading } = useDiary(userId, date);
  const logId = diaryData ? diaryData._id : null;

  useEffect(() => {
    if (!isLoading && diaryData) {
      const { color, img, score: prevScore, diary: prevDiary } = diaryData;
      setSelectedEmotion(img);
      setSelectedColor(color);
      setScore(prevScore);
      setDiary(prevDiary);
    }
  }, [isLoading, diaryData, logId]);

  const handleEmotionSelection = (emotion, color) => {
    setSelectedEmotion(emotion);
    setSelectedColor(color);
    setError(false); // 이모션 선택 에러 제거
  };

  const handleScoreChange = newScore => {
    setScore(newScore);
    setError(false); // 만족도 선택 에러 제거
  };

  const handleDiaryChange = event => {
    setDiary(event.target.value);
    setError(false); // 일기 작성 에러 제거
  };

  const handleSubmit = async event => {
    event.preventDefault();

    if (selectedEmotion && score && diary && selectedColor) {
      const data = {
        date: Number(date),
        color: selectedColor,
        img: selectedEmotion,
        score,
        diary,
      };

      if (logId) {
        updateDiary("test", date, data);
      } else {
        createDiary("test", data);
      }

      navigate("/diary");
    } else {
      setError(true);
    }
  };

  return (
    <Container>
      <DiaryDate date={date} />
      <DiaryContent>
        <p className="diary-title">오늘의 당신을 선택해주세요.</p>
        <EmotionBox
          selectedColor={selectedColor}
          selectedEmotion={selectedEmotion}
          handleEmotionSelection={handleEmotionSelection}
        />
        {error && !selectedEmotion && <ErrorText>이모션을 선택해주세요.</ErrorText>}
      </DiaryContent>
      <DiaryContent>
        <p className="diary-title">오늘 챌린지의 만족도는 어땠나요?</p>
        <Rating setScore={handleScoreChange} score={score} />
        {error && !score && <ErrorText>만족도를 선택해주세요.</ErrorText>}
      </DiaryContent>
      <DiaryContent>
        <p className="diary-title">오늘 하루는 어땠나요?</p>
        <textarea
          name="diary"
          value={diary}
          onChange={handleDiaryChange}
          cols="30"
          rows="10"
        ></textarea>
        {error && !diary && <ErrorText>일기를 작성해주세요.</ErrorText>}
      </DiaryContent>
      <ClickButtonBig
        onClick={handleSubmit}
        buttonClassName="writing-button"
        buttonText={logId ? "수정하기" : "등록하기"}
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
    height: 12rem;
    font-size: 1.6rem;
    font-family: "Pretendard-Regular", "sans-serif";
    box-sizing: border-box;
    padding: 1.5rem;
  }
`;

const DiaryContent = styled.div`
  & .diary-title {
    margin: 1rem 0;
  }
`;

const ErrorText = styled.p`
  color: red;
  font-size: 1.4rem;
  margin-top: 0.2rem;
`;
