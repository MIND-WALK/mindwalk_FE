import React, { useState } from "react";
import { FiArrowLeft } from "react-icons/fi";
import { BiHomeAlt } from "react-icons/bi";
import { MdLocationOn } from "react-icons/md";
import styled from "styled-components";
import { Link } from "react-router-dom";

const ChallengeList = () => {
  const [selectedChallenge, setSelectedChallenge] = useState(null);

  const handleChallengeSelect = challenge => {
    setSelectedChallenge(challenge);
  };

  const handleCompleteChallenge = () => {
    if (selectedChallenge) {
      // 선택한 챌린지 값을 다음 페이지로 전달하고 페이지 이동
      console.log("Selected Challenge:", selectedChallenge);
    }
  };

  // 가상의 챌린지 데이터
  const challengeData = [
    {
      id: 1,
      title: "동대문플라자 DDP",
      emotion: "우울함",
      location: "00구 00동",
      time: "1시간",
      distance: "5",
      backgroundImage: "url(./../../assets/img/Challenge1.png)",
    },
    {
      id: 2,
      title: "청계천",
      emotion: "흥분",
      location: "00구 00동",
      time: "1시간",
      distance: "3",
      backgroundImage: "url(/images/challenge2.jpg)",
    },
    // 챌린지 데이터...
  ];

  return (
    <>
      <Container>
        <SubTitle>오늘 감정에 어울리는 곳을 가보는 건 어떨까요?</SubTitle>
        <LocationContainer>
          <LocationIcon />
          <LocationText>현재 위치: 00구 00동</LocationText>
        </LocationContainer>
        <ChallengeLists>
          {challengeData.map(challenge => (
            <ChallengeCard
              key={challenge.id}
              isSelected={selectedChallenge === challenge}
              backgroundImage={challenge.backgroundImage}
              onClick={() => handleChallengeSelect(challenge)}
            >
              <ChallengeInfo>
                <ChallengeTitle>{challenge.title}</ChallengeTitle>
                <ChallengeDetails>
                  <ChallengeSubtitle>소요 시간: {challenge.time}</ChallengeSubtitle>
                  <ChallengeSubtitle>거리: {challenge.distance}km</ChallengeSubtitle>
                </ChallengeDetails>
              </ChallengeInfo>
            </ChallengeCard>
          ))}
        </ChallengeLists>
        <ChallengeButton onClick={handleCompleteChallenge} link="/challenge/selected">
          챌린지 선택 완료
        </ChallengeButton>
      </Container>
    </>
  );
};

export default ChallengeList;

const Container = styled.div`
  padding: 1.25rem;
`;

const SubTitle = styled.p`
  font-size: 1.5rem;
  margin-bottom: 2.5rem;
`;

const LocationContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1.25rem;
`;

const LocationIcon = styled(MdLocationOn)`
  font-size: 1.5rem;
  margin-right: 0.625rem;
`;

const LocationText = styled.span`
  font-size: 0.875rem;
`;

const ChallengeLists = styled.ul`
  list-style: none;
  padding: 0;
`;

const ChallengeCard = styled.li`
  display: flex;
  align-items: center;
  padding: 1.25rem;
  border-radius: 0.5rem;
  background-image: url(${props => props.backgroundImage});
  background-size: cover;
  margin-bottom: 1.25rem;
  cursor: pointer;
  border: 0.125rem solid ${props => (props.isSelected ? "#000000" : "#dddddd")};
`;

const ChallengeInfo = styled.div`
  flex: 1;
  color: #000;
`;

const ChallengeTitle = styled.h3`
  font-size: 1.2rem;
  margin-bottom: 0.3125rem;
`;

const ChallengeDetails = styled.div`
  display: flex;
  align-items: center;
`;

const ChallengeSubtitle = styled.p`
  font-size: 0.75rem;
  margin-right: 0.625rem;
`;

const ChallengeButton = styled.button`
  width: 30rem;
  height: 4.5rem;
  background: var(--sub-green-color);
  border-radius: 4rem;
  text-align: center;
  position: fixed;
  bottom: 7rem;
  left: 50%;
  transform: translateX(-50%);
  font-size: 1.4rem;
  color: #fff;
  cursor: pointer;
  &:hover {
    font-weight: bold;
    background: var(--sub-yellow-color);
    transition: 0.5s;
    color: var(--sub-green-color);
  }
`;
