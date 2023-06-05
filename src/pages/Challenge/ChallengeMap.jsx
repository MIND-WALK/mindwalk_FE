import React, { useEffect, useState } from "react";
import { styled } from "styled-components";
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";

import { MdLocationOn } from "react-icons/md";
import axios from "axios";
import ChallengeInitTmap from "./ChallengeInitTmap";
import ClickBottomModal from "../../components/common/Modal/ClickBottomModal";
import {
  currentLocationLatState,
  currentLocationLongState,
  locationLatState,
  locationLongState,
  locationNameState,
} from "../../recoil/challenge";
import userIdState from "../../recoil/userIdState";
import CurrentLocation from "../../components/views/Challenge/CurrentLocation";

function getCurrentDate() {
  const date = new Date();
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");

  return `${year}-${month}-${day}`;
}

const ChallengeMap = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [challengeCheck, setChallengeCheck] = useState(false);

  // 챌린지
  const [selectedPlace, setSelectedPlace] = useRecoilState(locationNameState);
  const [selectedLocationLong, setSelectedLocationLong] = useRecoilState(locationLongState);
  const [selectedLocationLat, setSelectedLocationLat] = useRecoilState(locationLatState);
  const [userAuthState, setUserAuthState] = useRecoilState(userIdState);

  // 내 현재좌표
  const [currentLocationLong, setCurrentLocationLong] = useRecoilState(currentLocationLongState);
  const [currentLocationLat, setCurrentLocationLat] = useRecoilState(currentLocationLatState);

  const navigate = useNavigate();
  const currentDate = getCurrentDate();
  const url = `${process.env.REACT_APP_API_URL}/user/challenge/${userAuthState}`;

  // console.log(url);

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
  const handleChallengeComplete = async () => {
    /*  */
    setModalOpen(true);
    document.documentElement.style.overflow = "hidden";

    // 현재 GPS 값과 선택한 장소의 범위 반경을 비교하여 챌린지 성공 또는 실패 처리
    // 성공: showModalSuccess();
    // 실패: showModalFailure();

    const body = {
      name: selectedPlace,
      /*   location: { lat: locationLat, long: locationLong }, */
      check: challengeCheck,
      user: userAuthState,
      date: currentDate,
    };
    // console.log(body);

    // const rangeSuccess=selectedLocationLong ...//ing

    try {
      const response = await axios.post(url, body);

      if (response.status === 201) {
        /*   if () {
          alert("챌린지 성공");
          setChallengeCheck(true);
        } else {
          alert("챌린지 실패 위치아님");
          setChallengeCheck(false);
        } */
      }
    } catch (error) {
      setChallengeCheck(false);
    }
  };

  useEffect(() => {
    handleCloseModal();
  }, []);

  return (
    <MapBox>
      <Title>&quot;{selectedPlace}&quot; 🏃‍♂️ 바람 쐬러 가요~!</Title>
      <MapIcon className="icon-map" />
      <LocationContainer>
        <LocationIcon />
        <LocationText>
          <CurrentLocation />
        </LocationText>
      </LocationContainer>

      {currentLocationLat && currentLocationLong && (
        <ChallengeInitTmap selectedPlace={selectedPlace} />
      )}

      <CompleteButton onClick={handleChallengeComplete}>도착 완료</CompleteButton>

      {challengeCheck ? (
        <ClickBottomModal
          modalText="챌린지 성공!"
          buttonLeftText="홈으로 가기"
          buttonRightText="감정일기 쓰기"
          modalOpen={modalOpen}
          buttonLeftOnClick={handleClickHome}
          buttonRightOnClick={handClickDiary}
        />
      ) : (
        <ClickBottomModal
          modalText="해당 위치에서 다시 시도해주세요."
          buttonLeftText="닫기"
          modalOpen={modalOpen}
          buttonLeftOnClick={handleCloseModal}
        />
      )}
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
