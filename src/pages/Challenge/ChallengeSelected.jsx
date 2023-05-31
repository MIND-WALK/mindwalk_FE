import React from "react";
import styled from "styled-components";

const ChallengeSelected = () => {
  // 예시 데이터
  const selectedPlace = "선택한 장소 이름";
  const estimatedTime = "소요시간";
  const distance = "거리";

  // 챌린지 완료 처리 함수
  const handleChallengeComplete = () => {
    // 현재 GPS 값과 선택한 장소의 범위 반경을 비교하여 챌린지 성공 또는 실패 처리
    // 성공: showModalSuccess();
    // 실패: showModalFailure();
  };

  return (
    <Container>
      <Title>{`${selectedPlace}으로 바람 쐬러 가요~!`}</Title>
      <MapIcon className="icon-map" />
      <CurrentLocation>현재 위치: 현재 GPS 값</CurrentLocation>
      <MapBox>{/* 지도 API로 구현 */}</MapBox>
      <SelectedInfo>
        <PlaceName>{selectedPlace}</PlaceName>
        <TimeDistance>{`${estimatedTime} / ${distance}`}</TimeDistance>
      </SelectedInfo>
      <CompleteButton onClick={handleChallengeComplete}>챌린지 완료</CompleteButton>
    </Container>
  );
};

export default ChallengeSelected;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  text-align: center;
`;

const Title = styled.h1`
  font-size: 24px;
  margin-bottom: 20px;
`;

const MapIcon = styled.div`
  font-size: 40px;
  color: #000;
`;

const CurrentLocation = styled.p`
  margin-top: 10px;
  font-size: 16px;
  color: #555;
`;

const MapBox = styled.div`
  width: 100%;
  height: 300px;
  margin-top: 20px;
  background-color: #f0f0f0;
`;

const SelectedInfo = styled.div`
  margin-top: 20px;
`;

const PlaceName = styled.h2`
  font-size: 20px;
  margin-bottom: 10px;
`;

const TimeDistance = styled.p`
  font-size: 16px;
  color: #555;
`;

const CompleteButton = styled.button`
  margin-top: 30px;
  padding: 12px 24px;
  background-color: #4dba6d;
  color: #fff;
  font-size: 18px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
`;
