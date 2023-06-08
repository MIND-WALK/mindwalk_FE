import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useRecoilState } from "recoil";
import { styled } from "styled-components";
import userIdState from "../../../recoil/userIdState";

const JourneyDetail = () => {
  const { id } = useParams();

  const [userAuthState] = useRecoilState(userIdState);

  const [journey, setJourney] = useState();

  useEffect(() => {
    const getCompletedJourney = async () => {
      const { data } = await axios.get(`/api/user/trip/${userAuthState}`);

      const filteredData = data.filter(detail => detail._id === id);

      setJourney(filteredData[0]);
    };

    getCompletedJourney();
  }, []);

  if (journey)
    return (
      <section>
        <div>
          <Image src={journey.img} alt="" />
        </div>
        <Container>
          <Date>{journey.date.replace(/-/g, ".")}</Date>
          <BoldText>{journey.name}</BoldText>
          <TimeAndDistance>소요 시간</TimeAndDistance>
          <BoldText>오늘의 감정</BoldText>
          <Address>기쁨</Address>
        </Container>
      </section>
    );
  return <></>;
};

export default JourneyDetail;

const Image = styled.img`
  width: 100%;
  height: 250px;
`;

const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
`;

const Date = styled.p`
  font-size: 1.4rem;
  margin-bottom: 0.6rem;
`;

const BoldText = styled.p`
  font-size: 1.8rem;
  font-weight: bold;
  margin-bottom: 0.6rem;
`;

const Address = styled.p`
  font-size: 1.6rem;
  margin-bottom: 0.2rem;
`;

const TimeAndDistance = styled.p`
  font-size: 1.4rem;
  margin-bottom: 1.5rem;
`;
