import React, { useEffect, useState } from "react";
import { styled } from "styled-components";
import { MdLocationOn } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import ChallengeInitTmap from "./ChallengeInitTmap";
import ClickBottomModal from "../../components/common/Modal/ClickBottomModal";

const ChallengeMap = () => {
  const selectedPlace = "장소 이름";

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

  // 챌린지 완료 처리 함수
  const handleChallengeComplete = () => {
    setModalOpen(true);
    document.documentElement.style.overflow = "hidden";

    // 현재 GPS 값과 선택한 장소의 범위 반경을 비교하여 챌린지 성공 또는 실패 처리
    // 성공: showModalSuccess();
    // 실패: showModalFailure();
  };

  useEffect(() => {
    handleCloseModal();
  }, []);

  return (
    <MapBox>
      <Title>&quot;{selectedPlace}&quot; 로 바람 쐬러 가요~!</Title>
      <MapIcon className="icon-map" />
      <LocationContainer>
        <LocationIcon />
        <LocationText> 현재 위치 | 00구 00동</LocationText>
      </LocationContainer>

      <ChallengeInitTmap selectedPlace={selectedPlace} />

      <CompleteButton onClick={handleChallengeComplete}>도착 완료</CompleteButton>

      <ClickBottomModal
        modalText="해당 위치에서 다시 시도해주세요."
        buttonLeftText="닫기"
        modalOpen={modalOpen}
        buttonLeftOnClick={handleCloseModal}
      />
      <ClickBottomModal
        modalText="챌린지 성공!"
        buttonLeftText="홈으로 가기"
        buttonRightText="감정일기 쓰기"
        modalOpen={modalOpen}
        buttonLeftOnClick={handleClickHome}
        buttonRightOnClick={handClickDiary}
      />
    </MapBox>
  );
};

export default ChallengeMap;

const MapBox = styled.div`
  margin: 0 2rem;
`;

const Title = styled.h1`
  font-size: 1.5rem;
  margin-bottom: 2.5rem;
  text-align: center;
  padding-top: 1rem;
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
