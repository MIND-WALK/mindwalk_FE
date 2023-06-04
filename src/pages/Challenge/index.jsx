import React, { useEffect } from "react";
import { styled } from "styled-components";
import { useParams } from "react-router-dom";
import { useRecoilState } from "recoil";
import ChallengeList from "../../components/views/Challenge/ChallengeList";
import emotionState from "../../recoil/emotionState";

const Challenge = () => {
  /* const { emotion } = useParams(); */
  const [selectedEmotion, setSelectedEmotion] = useRecoilState(emotionState);

  /*  useEffect(() => setSelectedEmotion("sad"), [selectedEmotion]); */

  return (
    <Container>
      <ChallengeList emotion={selectedEmotion} /*  emotion={emotion}> */></ChallengeList>
    </Container>
  );
};

export default Challenge;

const Container = styled.section`
  padding: 20px;
`;
