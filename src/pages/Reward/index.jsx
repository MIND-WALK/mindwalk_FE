import React from "react";
import { styled } from "styled-components";
import Level from "../../components/views/Reward/Level";
import QuestTracker from "../../components/views/Reward/QuestTracker";

export default function Reward() {
  return (
    <Container>
      <Level />
      <QuestTracker />
    </Container>
  );
}

const Container = styled.div`
  max-width: 475px;
  min-width: 360px;
  width: 100vw;
  height: 100vh;
  border: 1px solid black;
`;
