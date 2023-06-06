import React from "react";
import { styled } from "styled-components";
import { Title } from "./Level";

const AchivementList = ({ questInfo }) => {
  console.log(questInfo);

  return (
    <Container>
      <Title>달성 업적</Title>
      <AchivementListBox>
        {questInfo.date &&
          questInfo.date
            .map((date, index) => {
              if (index !== 0 && (index + 1) % 10 === 0)
                return (
                  <CompletedQuest key={date._id}>
                    <LevelImage>
                      <img src="#" alt="" />
                    </LevelImage>
                    <TextBox>
                      <DateText>{date.replace(/-/g, ".")}</DateText>
                      <p>여정 {index + 1}개 달성</p>
                    </TextBox>
                  </CompletedQuest>
                );
              return <></>;
            })
            .reverse()}
      </AchivementListBox>
    </Container>
  );
};

export default AchivementList;

const Container = styled.section`
  padding: 2rem;
`;

const AchivementListBox = styled.ul`
  height: 150px;
  margin-top: 3rem;
  overflow-y: auto;
`;

const CompletedQuest = styled.li`
  display: flex;
  align-items: center;

  + li {
    margin-top: 2rem;
  }
`;

const LevelImage = styled.div`
  background-color: white;
  width: 6rem;
  height: 6rem;
  border: 1px solid #eaeaea;
  border-radius: 50%;
`;

export const TextBox = styled.div`
  margin-left: 20px;
  font-size: 1.4rem;
  width: calc(315px - 6rem);
  justify-content: space-between;
`;

export const DateText = styled.p`
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.3rem;
  font-size: 1.2rem;
`;
