import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { MdLocationOn } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import ClickBottomModal from "../../components/common/Modal/ClickBottomModal";

const ChallengeSelected = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const navigate = useNavigate();

  const handleCloseModal = () => {
    setModalOpen(false);
    document.documentElement.style.overflow = "auto";
  };
  const handleClickHome = () => {
    setModalOpen(false);
    navigate("/");
    document.documentElement.style.overflow = "auto";
  };
  const handClickDiary = () => {
    setModalOpen(false);
    navigate("/my_page");
    document.documentElement.style.overflow = "auto";
  };

  useEffect(() => {
    handleCloseModal();
  }, []);

  // 예시 데이터
  const selectedPlace = "선택한 장소 이름";
  const estimatedTime = "소요시간";
  const distance = "거리";

  // 챌린지 완료 처리 함수
  const handleChallengeComplete = () => {
    setModalOpen(true);
    document.documentElement.style.overflow = "hidden";

    // 현재 GPS 값과 선택한 장소의 범위 반경을 비교하여 챌린지 성공 또는 실패 처리
    // 성공: showModalSuccess();
    // 실패: showModalFailure();
  };

  return (
    <ChallengeBox>
      <Title>{`${selectedPlace}으로 바람 쐬러 가요~!`}</Title>
      <MapIcon className="icon-map" />
      <LocationContainer>
        <LocationIcon />
        <LocationText> 현재 위치 | 00구 00동</LocationText>
      </LocationContainer>
      <MapBox>{/* 지도 API로 구현 */}</MapBox>
      <SelectedInfo>
        <PlaceName>{selectedPlace}</PlaceName>
        <TimeDistance>{`${estimatedTime} | ${distance} km`}</TimeDistance>
      </SelectedInfo>
      <CompleteButton onClick={handleChallengeComplete}>도착 완료</CompleteButton>

      <ClickBottomModal
        modalText="챌린지 성공!"
        buttonLeftText="홈으로 가기"
        buttonRightText="감정일기 쓰기"
        modalOpen={modalOpen}
        buttonLeftOnClick={handleCloseModal}
        buttonRightOnClick={handClickDiary}
      />
    </ChallengeBox>
  );
};

export default ChallengeSelected;

const ChallengeBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1.25rem;
  text-align: center;
`;

const Title = styled.h1`
  font-size: 1.5rem;
  margin-bottom: 2.5rem;
`;

const MapIcon = styled.div`
  font-size: 40px;
  color: #000;
`;

const LocationContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 0.25rem;
  width: 90%;
  justify-content: flex-start;
`;

const LocationIcon = styled(MdLocationOn)`
  font-size: 1.5rem;
  margin-right: 0.625rem;
`;

const LocationText = styled.span`
  font-size: 1.35rem;
`;

const MapBox = styled.div`
  width: 90%;
  height: 300px;
  margin-top: 20px;
  background-color: #f0f0f0;
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

const SelectedInfo = styled.div`
  margin: 1.2rem;
  width: 90%;
  display: flex;
  justify-content: space-between;
`;

const PlaceName = styled.h2`
  font-size: 1.4rem;
  margin-bottom: 1rem;
`;

const TimeDistance = styled.p`
  font-size: 1.3rem;
  color: #555;
`;

const CompleteButton = styled.button`
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
    color: var(--sub-green-color);
  }
`;
