import React, { useState } from "react";
import axios from "axios";
import { useRecoilState } from "recoil";
import { styled } from "styled-components";

const SelfDiagnosis = () => {
  // const [authenticated, setAuthenticated] = useRecoilState(userIdState);
  // const url = process.env.REACT_APP_API_URL;

  // const userId = localStorage.getItem("id");

  const [selfEmotion, setSelfEmotion] = useState("");

  const emotionLists = [
    { emotion: "" },
    { emotion: "" },
    { emotion: "" },
    { emotion: "" },
    { emotion: "" },
  ];

  /* 
  const handleSubmit = async () => {
    // api적용전 세팅
    try {
      const response = await axios.post(
        `${url}/user/info/${userId}`,
        { self: `${selfEmotion}` },
        {},
      );

      // const { ts, value } = response.data.self;//?
      // console.log(ts, value);

      // 페이지이동
      if (loginData.data.code === 200) {
        // ? navigate("/");
        // ? window.location.href = '/new-page';
      }
    } catch (error) {
      console.error(error);
      alert("오류가 발생했습니다.");
    }
  }; */

  return (
    <DiagnosisContainer>
      <TitleContainer>
        <MainTitle>오늘 박나나님의 감정은 어떤가요?</MainTitle>
        <SubTitle>당신의 기분을 가장 잘 나타내는 것으로 1개만 골라주세요</SubTitle>
      </TitleContainer>

      <EmotionContainer>
        {emotionLists.map((item, index) => (
          <button onClick={() => setSelfEmotion(item.emotion)} key={index}>
            {/*   <img
              src={require(`./../../assets/img/${item.emotion}.png`).default}
              alt={item.emotion}
            /> */}
          </button>
        ))}
      </EmotionContainer>

      <SubMitButton /*  onClick={handleSubmit} */>자가 진단 완료</SubMitButton>
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
