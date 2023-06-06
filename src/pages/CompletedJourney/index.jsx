import React, { useEffect, useState } from "react";
import { styled } from "styled-components";
import axios from "axios";
import { useRecoilState } from "recoil";
import CompletedJourneyList from "../../components/views/CompletedJourney/CompletedJourneyList";
import userIdState from "../../recoil/userIdState";

const CompletedJourney = () => {
  const [completedJourney, setCompletedJourney] = useState([]);

  const [userAuthState] = useRecoilState(userIdState);

  useEffect(() => {
    const getCompletedJourney = async () => {
      const { data } = await axios.get(`http://54.180.88.103:4000/api/user/trip/${userAuthState}`);

      setCompletedJourney(data);
    };

    getCompletedJourney();
  }, []);

  return (
    <Container>
      {completedJourney.length > 0 && <CompletedJourneyList completedJourney={completedJourney} />}
    </Container>
  );
};

export default CompletedJourney;

const Container = styled.section`
  padding: 20px;
`;
