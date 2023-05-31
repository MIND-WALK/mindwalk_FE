import React from "react";
import { styled } from "styled-components";
import ChallengeList from "../../components/views/Challenge/ChallengeList";

const Challenge = () => {
  return (
    <Container>
      <ChallengeList></ChallengeList>
    </Container>
  );
};

export default Challenge;

const Container = styled.section`
  padding: 20px;
`;
