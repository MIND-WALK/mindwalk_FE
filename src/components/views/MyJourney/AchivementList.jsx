import React from "react";
import { styled } from "styled-components";
import { Title } from "./Level";

const AchivementList = () => {
  return (
    <Container>
      <Title>달성 업적</Title>
      <AchivementListBox>
        <CompletedQuest>
          <LevelImage>
            <img src="#" alt="" />
          </LevelImage>
          <TextBox>
            <DateText>2023. 01. 31</DateText>
            <p>여정 50개 달성</p>
          </TextBox>
        </CompletedQuest>
      </AchivementListBox>
    </Container>
  );
};

export default AchivementList;

const Container = styled.section`
  padding: 2rem;
`;

const AchivementListBox = styled.ul`
  height: 200px;
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
`;

const DateText = styled.p`
  margin-bottom: 0.3rem;
`;
