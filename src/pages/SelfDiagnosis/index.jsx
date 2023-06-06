import React, { useState } from "react";
import axios from "axios";
import { useRecoilState, useSetRecoilState, useRecoilValue } from "recoil";
import { useNavigate } from "react-router-dom";
import { styled } from "styled-components";
import Angry from "../../assets/emotion/card/angry-card.svg";
import Happy from "../../assets/emotion/card/happy-card.svg";
import Natural from "../../assets/emotion/card/natural-card.svg";
import Sad from "../../assets/emotion/card/sad-card.svg";
import Surprise from "../../assets/emotion/card/surprise-card.svg";
import { postSelfDiagnosis } from "../../apis/selfdiagnosis";
import userIdState from "../../recoil/userIdState";
import emotionState from "../../recoil/emotionState";

const images = [Angry, Happy, Natural, Sad, Surprise];

const SelfDiagnosis = () => {
  const [userId, setUserId] = useRecoilState(userIdState);

  const [selfEmotion, setSelfEmotion] = useState("");
  const navigate = useNavigate();

  const emotionLists = [
    { emotion: "angry" },
    { emotion: "happy" },
    { emotion: "natural" },
    { emotion: "sad" },
    { emotion: "surprise" },
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
      navigate(`/challenge/${emotion}`);
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
            // selected={selfEmotion === item.emotion}
          >
            <EmotionImage src={images[index]} alt={item.emotion} />
          </EmotionButton>
        ))}
      </EmotionContainer>
      <SubmitButton onClick={handleSubmit}>자가 진단 완료</SubmitButton>
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
  ${props => props.selected && "transform: scale(1.1);"};
  animation: ${props => props.selected && "shake 0.5s infinite"};

  &:hover {
    transform: scale(1.1);
  }
`;

const EmotionImage = styled.img`
  width: 10rem;
  height: 10rem;
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
