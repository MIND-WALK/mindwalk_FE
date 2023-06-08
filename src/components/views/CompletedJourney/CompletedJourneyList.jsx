import React, { useEffect, useState } from "react";
import { styled } from "styled-components";
import { useRecoilState } from "recoil";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";
import { Title } from "../MyJourney/Level";
import { DateText, TextBox } from "../MyJourney/AchivementList";
import userIdState from "../../../recoil/userIdState";

const CompletedJourneyList = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const [completedJourney, setCompletedJourney] = useState([]);

  const [userAuthState] = useRecoilState(userIdState);

  useEffect(() => {
    const getCompletedJourney = async () => {
      const { data } = await axios.get(`/api/user/trip/test`);

      setCompletedJourney(data);
    };

    getCompletedJourney();
  }, []);

  return (
    <Container>
      <Title>완수한 여정</Title>
      <JourneyList>
        {completedJourney.map(journey => (
          <Journey
            key={journey._id}
            onClick={() => navigate(`/my_journey/completed/${journey._id}`)}
          >
            <PlaceImage src={journey.img} />
            <TextBox>
              <DateText>
                <span>{journey.date.replace(/-/g, ".")}</span>
              </DateText>
              <p>{journey.name}</p>
            </TextBox>
          </Journey>
        ))}
        {completedJourney.length === 0 && (
          <EmptyArray small={pathname === "/home"}>아직 완수한 여정이 없어요.</EmptyArray>
        )}
      </JourneyList>
    </Container>
  );
};

export default CompletedJourneyList;

const Container = styled.div`
  width: 100%;
  height: 100%;
`;

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
  cursor: pointer;
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

const EmptyArray = styled.p`
  font-size: 1.5rem;
  width: 100%;
  height: ${({ small }) => {
    if (small) return "50px";
    return "100%";
  }};
  display: flex;
  align-items: center;
  justify-content: center;
`;
