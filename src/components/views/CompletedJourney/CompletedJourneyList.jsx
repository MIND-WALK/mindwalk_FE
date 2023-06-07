import React, { useEffect, useState } from "react";
import { styled } from "styled-components";
import { useRecoilState } from "recoil";
import axios from "axios";
import { Title } from "../MyJourney/Level";
import { DateText, TextBox } from "../MyJourney/AchivementList";
import userIdState from "../../../recoil/userIdState";

const CompletedJourneyList = () => {
  const [completedJourney, setCompletedJourney] = useState([]);

  const [userAuthState] = useRecoilState(userIdState);

  useEffect(() => {
    const getCompletedJourney = async () => {
      const { data } = await axios.get(`/api/user/trip/${userAuthState}`);

      setCompletedJourney(data);
    };

    getCompletedJourney();
  }, []);

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
