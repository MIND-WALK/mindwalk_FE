import React, { useEffect } from "react";
import { styled } from "styled-components";
import Calendar from "../../components/views/Diary/Calendar";
import ListDiary from "../../components/views/Diary/ListDiary";
import { useDiaries } from "../../hooks/queries/useDiary";

const Diary = () => {
  const { data, isLoading } = useDiaries("test");

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (!data || data.length === 0) {
    return <p>작성한 일기가 없습니다. 오늘의 감정일기를 작성해보세요!</p>;
  }

  const colorData = data.map(item => {
    return { date: item.date, color: item.color };
  });

  return (
    <Container>
      <Calendar colorData={colorData} />
      <p className="diary-title">나의 기록</p>
      <div className="diary-box">
        {data.map(item => (
          <React.Fragment key={item._id}>
            <ListDiary
              color={item.color}
              date={item.date}
              diary={item.diary}
              img={item.img}
              score={item.score}
              id={item._id}
            />
          </React.Fragment>
        ))}
      </div>
    </Container>
  );
};

export default Diary;

const Container = styled.div`
  font-size: 1.6rem;
  margin: auto 2rem;

  & .diary-box {
    height: 23rem;
    overflow-y: auto;
    -webkit-overflow-scrolling: touch;
    -ms-overflow-style: none;
    scrollbar-width: none;

    &::-webkit-scrollbar {
      display: none;
    }
  }

  & > .diary-title {
    font-size: 1.8rem;
    font-weight: bold;
  }
`;
