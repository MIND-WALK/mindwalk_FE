import React, { useEffect } from "react";
import { styled } from "styled-components";
import { useParams } from "react-router-dom";

import ChallengeList from "../../components/views/Challenge/ChallengeList";

const Challenge = () => {
  const { emotion } = useParams();

  return (
    <Container>
      <ChallengeList emotion={emotion}></ChallengeList>
    </Container>
  );
};

export default Challenge;

const Container = styled.section`
  padding: 20px;
`;
