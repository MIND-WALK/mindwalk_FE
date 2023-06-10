import React, { useEffect, useState } from "react";
import { styled } from "styled-components";
import { useNavigate } from "react-router-dom";
import { useRecoilState, useSetRecoilState } from "recoil";
import { MdLocationOn } from "react-icons/md";
import axios from "axios";
import ChallengeInitTmap from "./ChallengeInitTmap";
import ClickBottomModal from "../../components/common/Modal/ClickBottomModal";
import {
  challengeCheckState,
  challengeDistanceState,
  challengeImgState,
  challengeRangeCheck,
  currentLocationLatState,
  currentLocationLongState,
  locationLatState,
  locationLongState,
  locationNameState,
} from "../../recoil/challenge";
import userIdState from "../../recoil/userIdState";
import CurrentLocation from "../../components/views/Challenge/CurrentLocation";
import emotionState from "../../recoil/emotionState";

function getCurrentDate() {
  const date = new Date();
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");

  return `${year}-${month}-${day}`;
}

const ChallengeMap = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [challengeCheck, setChallengeCheck] = useRecoilState(challengeRangeCheck);
  const [emotion, setEmotion] = useRecoilState(emotionState);
  const [resultDistanceText, setResultDistanceText] = useRecoilState(challengeDistanceState);

  // 챌린지
  const [selectedPlace, setSelectedPlace] = useRecoilState(locationNameState);
  const [selectedLocationLong, setSelectedLocationLong] = useRecoilState(locationLongState);
  const [selectedLocationLat, setSelectedLocationLat] = useRecoilState(locationLatState);
  const [userAuthState, setUserAuthState] = useRecoilState(userIdState);

  // 내 현재좌표
  const [currentLocationLong, setCurrentLocationLong] = useRecoilState(currentLocationLongState);
  const [currentLocationLat, setCurrentLocationLat] = useRecoilState(currentLocationLatState);

  const [challengeImg, setChallengeImg] = useRecoilState(challengeImgState);

  const setChallengeCheckState = useSetRecoilState(challengeCheckState);

  const navigate = useNavigate();
  const currentDate = getCurrentDate();
  const url = `${process.env.REACT_APP_API_URL}/user/challenge/${userAuthState}`;

  const handleCloseModal = () => {
    setModalOpen(false);
    document.documentElement.style.overflow = "auto";
  };
  const handleClickJourney = () => {
    setModalOpen(false);
    navigate("/my_journey");
    document.documentElement.style.overflow = "auto";
  };
  const handClickDiary = () => {
    setModalOpen(false);
    navigate("/diary");
    document.documentElement.style.overflow = "auto";
  };

  // 챌린지 완료 처리 함수
  const handleChallengeComplete = async () => {
    // 현재위치
    /* const lonlat = new window.Tmapv2.LatLng(currentLocationLat, currentLocationLong); */
    // ddp
    const lonlat = new window.Tmapv2.LatLng(37.5674, 127.0097);

    const endLonLat = new window.Tmapv2.LatLng(selectedLocationLat, selectedLocationLong);

    const locationDistance = lonlat.distanceTo(endLonLat);

    setModalOpen(true);
    document.documentElement.style.overflow = "hidden";

    const body = {
      name: selectedPlace,
      img: challengeImg,
      check: challengeCheck,
      user: userAuthState,
      date: currentDate,
      distance: resultDistanceText,
      emotion: emotion.emotion,
      emotionTime: emotion.time,
    };

    try {
      if (locationDistance < 1000) {
        setChallengeCheckState(true);
        await axios.post(url, body);
        setChallengeCheck(true);
      } else {
        setChallengeCheck(false);
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
          {/* <CurrentLocation /> */} {/* 실제 받아오는 현재위치 1 */}
          <p>현재 위치 | 서울특별시 중구 을지로</p>
        </LocationText>
      </LocationContainer>

      {/* 실제 받아오는 현재위치 2 */}
      {/*  {currentLocationLat && currentLocationLong && (
        <ChallengeInitTmap selectedPlace={selectedPlace} />
      )} */}

      {/* 동대문기준 */}
      <ChallengeInitTmap selectedPlace={selectedPlace} />

      <CompleteButton onClick={handleChallengeComplete}>도착 완료</CompleteButton>

      {challengeCheck ? (
        <ClickBottomModal
          modalText="챌린지 성공!"
          buttonLeftText="여정으로 가기"
          buttonRightText="감정일기 쓰기"
          modalOpen={modalOpen}
          buttonLeftOnClick={handleClickJourney}
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
  bottom: 8.2rem;
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
