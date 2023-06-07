import React, { useEffect, useState } from "react";
import { styled } from "styled-components";
import axios from "axios";
import { useRecoilState } from "recoil";
import CompletedJourneyList from "../../components/views/CompletedJourney/CompletedJourneyList";
import userIdState from "../../recoil/userIdState";

const CompletedJourney = () => {
  return (
    <Container>
      <CompletedJourneyList />
    </Container>
  );
};

export default CompletedJourney;

const Container = styled.section`
  width: 100%;
  padding: 20px;
`;
