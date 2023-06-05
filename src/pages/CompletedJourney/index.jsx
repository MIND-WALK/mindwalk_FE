import React, { useEffect, useState } from "react";
import { styled } from "styled-components";
import axios from "axios";
import CompletedJourneyList from "../../components/views/CompletedJourney/CompletedJourneyList";

const CompletedJourney = () => {
  const [completedJourney, setCompletedJourney] = useState([]);

  console.log(completedJourney);

  useEffect(() => {
    const getCompletedJourney = async () => {
      const { data } = await axios.get(`http://localhost:3100/api/user/trip/test`);
      console.log(data);
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
