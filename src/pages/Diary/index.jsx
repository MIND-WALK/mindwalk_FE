import React from "react";
import Calendar from "../../components/views/Diary/Calendar";
import ListDiary from "../../components/views/Diary/ListDiary";

const Diary = () => {
  return (
    <>
      <Calendar />
      <ListDiary
        content="동해물과 백두산이 마르고 닳도록 하느님이 보우하사 우리 나라 만세 동해물과 백두산이 마르고 닳도록 하느님이 보우하사 우리 나라 만세 동해물과 백두산이 마르고 닳도록 하느님이 보우하사 우리 나라 만세 동해물과 백두산이 마르고 닳도록 하느님이 보우하사"
        color="#f3e8a9"
        id={1}
        rating={3.5}
        date="1685325080943"
      />
    </>
  );
};

export default Diary;
