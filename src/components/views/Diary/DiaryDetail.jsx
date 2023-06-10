import React from "react";
import { styled } from "styled-components";
import { useNavigate, useParams } from "react-router-dom";
import { useRecoilState } from "recoil";
import DiaryDate from "./DiaryDate";
import RatedScore from "../../common/Rating/RatedScore";
import { useDeleteDiary, useDiary } from "../../../hooks/queries/useDiary";
import { useEmotion } from "../../../hooks/useEmotion";
import Loading from "../../common/Loading";
import userIdState from "../../../recoil/userIdState";

const DiaryDetail = () => {
  const [userAuthState] = useRecoilState(userIdState);
  const params = useParams();
  const { id, date } = params;

  const navigate = useNavigate();
  const { data, isLoading } = useDiary(userAuthState, date);
  const { mutate: deleteDiaryMutation } = useDeleteDiary(userAuthState);

  if (isLoading) {
    return <Loading />;
  }

  if (!data || data.length === 0) {
    return <p>데이터가 없습니다.</p>;
  }

  const { diary, color, score } = data;

  const handleEdit = () => {
    navigate(`/diary/write/${date}`);
  };

  const handleDelete = async () => {
    alert("일기를 삭제하시겠습니까?");
    deleteDiaryMutation(date);
    navigate("/diary");
  };

  return (
    <Container>
      <EmotionContainer>{useEmotion(color)} </EmotionContainer>
      <DiaryDate date={date} />
      <RatedScore rating={score} />
      <div className="content-box">{diary}</div>
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
