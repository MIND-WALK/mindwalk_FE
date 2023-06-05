import React from "react";
import { styled } from "styled-components";
import ChallengeList from "../../components/views/Challenge/ChallengeList";
import ChallengeSelected from "./ChallengeSelected";
import useChallengeCheck from "../../hooks/useChallengeCheck";
import ChallengeCompleted from "./ChallengeCompleted";

const Challenge = () => {
  const [challengeStatus] = useChallengeCheck();

  return (
    <Container>
      {challengeStatus ? <ChallengeCompleted /> : <ChallengeList></ChallengeList>}
    </Container>
  );
};

export default Challenge;

const Container = styled.section`
  padding: 20px;
`;
