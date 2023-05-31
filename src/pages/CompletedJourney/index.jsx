import React from "react";
import { styled } from "styled-components";
import CompletedJourneyList from "../../components/views/CompletedJourney/CompletedJourneyList";

const CompletedJourney = () => {
  return (
    <Container>
      <CompletedJourneyList></CompletedJourneyList>
    </Container>
  );
};

export default CompletedJourney;

const Container = styled.section`
  padding: 20px;
`;
