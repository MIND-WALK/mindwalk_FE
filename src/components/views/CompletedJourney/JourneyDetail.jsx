import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useRecoilState } from "recoil";
import { styled } from "styled-components";
import userIdState from "../../../recoil/userIdState";
import SurpriseIcon from "../../common/CustomIcon/EmotionIcon/SurpriseIcon";
import SadIcon from "../../common/CustomIcon/EmotionIcon/SadIcon";
import NaturalIcon from "../../common/CustomIcon/EmotionIcon/NaturalIcon";
import HappyIcon from "../../common/CustomIcon/EmotionIcon/HappyIcon";
import AngryIcon from "../../common/CustomIcon/EmotionIcon/AngryIcon";

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

  const getDate = milliSecond => {
    const days = Math.floor(milliSecond / (1000 * 60 * 60 * 24)); // 일
    const hour = String(Math.floor((milliSecond / (1000 * 60 * 60)) % 24)); // 시
    const minutes = String(Math.floor((milliSecond / (1000 * 60)) % 60)); // 분
    const second = String(Math.floor((milliSecond / 1000) % 60)); // 초

    return `${hour}시간 ${minutes}분`;
  };

  const getEmotion = eng => {
    switch (eng) {
      case "surprised":
        return { name: "흥분", icon: <SurpriseIcon size="6.7rem" /> };
      case "sad":
        return { name: "슬픔", icon: <SadIcon size="6.7rem" /> };
      case "neutral":
        return { name: "평온", icon: <NaturalIcon size="5.7rem" /> };
      case "happy":
        return { name: "기쁨", icon: <HappyIcon size="6.7rem" /> };
      case "angry":
        return { name: "분노", icon: <AngryIcon size="5.7rem" /> };
      default:
        return "";
    }
  };

  if (journey)
    return (
      <section>
        <ImageContainer>
          <Image src={journey.img} alt="" />
          {getEmotion(journey.emotion).icon}
        </ImageContainer>
        <Container>
          <DateText>{journey.date.replace(/-/g, ".")}</DateText>
          <BoldText>{journey.name}</BoldText>
          <TimeAndDistance>
            소요 시간 {getDate(journey.emotionTime)} | 거리 {journey.distance}
          </TimeAndDistance>
          <BoldText>오늘의 감정</BoldText>
          <Address>{getEmotion(journey.emotion).name}</Address>
        </Container>
      </section>
    );
  return <></>;
};

export default JourneyDetail;

const ImageContainer = styled.div`
  position: relative;

  button {
    position: absolute;
    right: 20px;
    bottom: -3rem;
  }
`;

const Image = styled.img`
  width: 100%;
  height: 250px;
`;

const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
`;

const DateText = styled.p`
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
