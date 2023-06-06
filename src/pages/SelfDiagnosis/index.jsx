import React, { useState } from "react";
import { useRecoilState } from "recoil";
import { useNavigate } from "react-router-dom";
import { styled } from "styled-components";
import { postSelfDiagnosis } from "../../apis/selfdiagnosis";
import AngryCard from "../../components/common/CustomIcon/EmotionCard/AngryCard";
import HappyCard from "../../components/common/CustomIcon/EmotionCard/HappyCard";
import NaturalCard from "../../components/common/CustomIcon/EmotionCard/NaturalCard";
import SadCard from "../../components/common/CustomIcon/EmotionCard/SadCard";
import SurpriseCard from "../../components/common/CustomIcon/EmotionCard/SurpriseCard";
import userIdState from "../../recoil/userIdState";
import emotionState from "../../recoil/emotionState";
import ClickButtonBig from "../../components/common/Buttons/ClickButtonBig";

// const images = [Angry, Happy, Natural, Sad, Surprise];

const SelfDiagnosis = () => {
  const [userId, setUserId] = useRecoilState(userIdState);

  const [selfEmotion, setSelfEmotion] = useState("");
  const navigate = useNavigate();

  const emotionLists = [
    { emotion: "angry", icon: <AngryCard size="12rem" /> },
    { emotion: "happy", icon: <HappyCard size="12rem" /> },
    { emotion: "natural", icon: <NaturalCard size="12rem" /> },
    { emotion: "sad", icon: <SadCard size="12rem" /> },
    { emotion: "surprise", icon: <SurpriseCard size="12rem" /> },
  ];

  const handleEmotionClick = emotion => {
    setSelfEmotion(emotion);
  };

  const handleSubmit = async () => {
    const data = {
      id: userId,
      emotion: selfEmotion,
    };
    console.log(data);
    try {
      postSelfDiagnosis("test", data);
      navigate(`/challenge/${selfEmotion}`);
      // const response = await axios.post(`/api/emotion/${userIdState}`, body);
      // if (response.status === 201) {
      //   setEmotionState(selfEmotion);
      //   console.log(selfEmotion);
      //   navigate("/challenge");
      // }
    } catch (error) {
      console.error(error);
      alert("감정 결과 전송 실패.");
    }
  };

  return (
    <DiagnosisContainer>
      <TitleContainer>
        <MainTitle>오늘 박나나님의 감정은 어떤가요?</MainTitle>
        <SubTitle>당신의 기분을 가장 잘 나타내는 것으로 1개만 골라주세요</SubTitle>
      </TitleContainer>
      <EmotionContainer>
        {emotionLists.map((item, index) => (
          <EmotionButton
            onClick={() => handleEmotionClick(item.emotion)}
            key={index}
            selected={selfEmotion === item.emotion}
          >
            <EmotionImage alt={item.emotion}>{item.icon}</EmotionImage>
          </EmotionButton>
        ))}
      </EmotionContainer>
      <ClickButtonBig onClick={handleSubmit} buttonText="자가 진단 완료" disabled={!selfEmotion} />
    </DiagnosisContainer>
  );
};

export default SelfDiagnosis;

const DiagnosisContainer = styled.div``;
const TitleContainer = styled.div`
  text-align: center;
  padding-top: 3rem;
  line-height: 1.6;
  padding-bottom: 3rem;
`;
const MainTitle = styled.div`
  font-weight: 700;
  font-size: 1.8rem;
`;
const SubTitle = styled.div`
  font-size: 1.4rem;
`;
const EmotionContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 2rem;
`;

const EmotionButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background: transparent;
  border: none;
  cursor: pointer;
  transition: transform 0.2s;
  ${props =>
    props.selected &&
    "transform: scale(1.1); filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));"};
  &:hover {
    transform: scale(1.1);
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  }
`;

const EmotionImage = styled.div`
  width: 10rem;
  height: 13rem;
`;

const SubmitButton = styled.div`
  width: 19.5rem;
  height: 4.5rem;
  text-align: center;
  color: #fff;
  font-weight: 700;
  font-size: 1.4rem;
  line-height: 4.5rem;
  background: var(--sub-green-color);
  border-radius: 4rem;
  margin: 0 auto;
  margin-top: 3rem;
`;
