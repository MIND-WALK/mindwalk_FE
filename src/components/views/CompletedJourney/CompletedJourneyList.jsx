import React from "react";
import { styled } from "styled-components";
import { Title } from "../MyJourney/Level";
import { DateText, TextBox } from "../MyJourney/AchivementList";

const CompletedJourneyList = () => {
  return (
    <>
      <Title>완수한 여정</Title>
      <JourneyList>
        <Journey>
          <PlaceImage></PlaceImage>
          <TextBox>
            <DateText>
              <p>2023. 01. 31</p>
              <p>소요 시간 100시간 | 거리 100km</p>
            </DateText>
            <p>도산공원</p>
          </TextBox>
        </Journey>
      </JourneyList>
    </>
  );
};

export default CompletedJourneyList;

const JourneyList = styled.ul`
  width: 100%;
  margin-top: 3rem;
`;

const Journey = styled.li`
  width: 100%;
  display: flex;
  align-items: center;

  + li {
    margin-top: 2rem;
  }
`;

const PlaceImage = styled.img`
  width: 6rem;
  height: 6rem;
  background-color: pink;
  border-radius: 50%;
`;
