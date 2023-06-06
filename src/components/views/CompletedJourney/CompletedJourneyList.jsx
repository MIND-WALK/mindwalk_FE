import React from "react";
import { styled } from "styled-components";
import { Title } from "../MyJourney/Level";
import { DateText, TextBox } from "../MyJourney/AchivementList";

const CompletedJourneyList = ({ completedJourney }) => {
  return (
    <>
      <Title>완수한 여정</Title>
      <JourneyList>
        {completedJourney.map(journey => (
          <Journey key={journey._id}>
            <PlaceImage src={journey.img} />
            <TextBox>
              <DateText>
                <span>{journey.date.replace(/-/g, ".")}</span>
              </DateText>
              <p>{journey.name}</p>
            </TextBox>
          </Journey>
        ))}
      </JourneyList>
    </>
  );
};

export default CompletedJourneyList;

const JourneyList = styled.ul`
  width: 100%;
  height: 500px;
  margin-top: 3rem;
  padding-bottom: 6rem;
  overflow-y: auto;
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
