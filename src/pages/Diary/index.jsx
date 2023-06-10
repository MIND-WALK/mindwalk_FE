import React, { useEffect } from "react";
import { styled } from "styled-components";
import { useRecoilState } from "recoil";
import Calendar from "../../components/views/Diary/Calendar";
import ListDiary from "../../components/views/Diary/ListDiary";
import { useDiaries } from "../../hooks/queries/useDiary";
import Loading from "../../components/common/Loading";
import userIdState from "../../recoil/userIdState";
import NoDiary from "../../components/views/Diary/NoDiary";

const Diary = () => {
  const [userAuthState] = useRecoilState(userIdState);

  const { data, isLoading } = useDiaries(userAuthState);

  if (isLoading) {
    return <Loading />;
  }

  if (!data || data.length === 0) {
    return <NoDiary />;
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
    height: 21rem;
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
