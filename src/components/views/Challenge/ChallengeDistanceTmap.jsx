import React, { useEffect, useState } from "react";
import axios from "axios";
import { styled } from "styled-components";
import { useRecoilState } from "recoil";

import { currentLocationLatState, currentLocationLongState } from "../../../recoil/challenge";

const ChallengeDistanceTmap = ({ selectedPlace, endLat, endLong }) => {
  const [resultDistanceText, setResultDistanceText] = useState("");
  const [resultTimeText, setResultTimeText] = useState("");

  const [currentLocationLong, setCurrentLocationLong] = useRecoilState(currentLocationLongState);
  const [currentLocationLat, setCurrentLocationLat] = useRecoilState(currentLocationLatState);

  // 현재 위치
  /*  const startLat = currentLocationLat;
  const startLong = currentLocationLong; */

  // DDP
  const startLat = 37.5668;
  const startLong = 127.0092;

  /* console.log(currentLocationLat);
  console.log(currentLocationLong); */

  const initTmap = async () => {
    const headers = {
      appKey: `${process.env.REACT_APP_TMAP_API_KEY}`,
    };

    try {
      const response = await axios.post(
        "https://apis.openapi.sk.com/tmap/routes/pedestrian?version=1&format=json&callback=result",
        {
          startX: `${startLong}`,
          startY: `${startLat}`,
          endX: `${endLong}`,
          endY: `${endLat}`,
          reqCoordType: "WGS84GEO",
          resCoordType: "EPSG3857",
          startName: "출발지",
          endName: "도착지",
        },
        {
          headers,
        },
      );

      const resultData = response.data.features;

      const tDistance = (resultData[0].properties.totalDistance / 1000).toFixed(1);
      const tTime = (resultData[0].properties.totalTime / 60).toFixed(0);

      setResultDistanceText(tDistance);
      setResultTimeText(tTime);
    } catch (error) {
      console.log("Error:", error);
    }
  };

  useEffect(() => {
    initTmap();
  }, []);

  return (
    <>
      <PlaceName>{selectedPlace}</PlaceName>
      <ChallengeSubtitle>거리 : {resultDistanceText} km | </ChallengeSubtitle>
      <ChallengeSubtitle>소요시간 : {resultTimeText}분</ChallengeSubtitle>
    </>
  );
};

export default ChallengeDistanceTmap;

const PlaceName = styled.p`
  font-size: 1.4rem;
  margin-bottom: 1rem;
`;

const ChallengeSubtitle = styled.p`
  font-size: 1.3rem;
  letter-spacing: -0.03rem;
`;
