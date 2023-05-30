import React from "react";
import { styled } from "styled-components";

const SelfDiagnosis = () => {
  const handleSubmit = () => {};

  return (
    <DiagnosisContainer>
      <TitleContainer>
        <MainTitle>오늘 박나나님의 감정은 어떤가요?</MainTitle>
        <SubTitle>당신의 기분을 가장 잘 나타내는 것으로 골라주세요</SubTitle>
      </TitleContainer>

      <EmotionContainer>
        <button>
          <img src="" alt="" />
        </button>
      </EmotionContainer>

      <SubMitButton onClick={handleSubmit}>자가 진단 완료</SubMitButton>
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
const EmotionContainer = styled.div``;

const SubMitButton = styled.div`
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
