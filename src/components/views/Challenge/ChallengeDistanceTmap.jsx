import React, { useEffect, useState } from "react";
import axios from "axios";
import { styled } from "styled-components";
import { useRecoilState } from "recoil";

import { currentLocationLatState, currentLocationLongState } from "../../../recoil/challenge";

const ChallengeDistanceTmap = ({ selectedPlace, endLat, endLong }) => {
  const [resultdrawArr, setResultdrawArr] = useState([]);
  const [resultText, setResultText] = useState("");

  const [currentLocationLong, setCurrentLocationLong] = useRecoilState(currentLocationLongState);
  const [currentLocationLat, setCurrentLocationLat] = useRecoilState(currentLocationLatState);

  const startLat = currentLocationLat;
  const startLong = currentLocationLong;

  console.log(currentLocationLat);
  console.log(currentLocationLong);

  // DDP
  /* const startLat = 37.5668; */
  /* const startLong = 127.0092; */

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

      // 결과 출력
      const tDistance = `거리 : ${(resultData[0].properties.totalDistance / 1000).toFixed(1)}km | `;
      const tTime = `소요시간 : ${(resultData[0].properties.totalTime / 60).toFixed(0)}분`;

      setResultText(tDistance + tTime);

      const addComma = num => {
        const regexp = /\B(?=(\d{3})+(?!\d))/g;
        return num.toString().replace(regexp, ",");
      };
    } catch (error) {
      console.log("Error:", error);
    }
  };

  useEffect(() => {
    initTmap();
  }, []);

  return (
    <SelectedInfo>
      <PlaceName>{selectedPlace}</PlaceName>
      <TimeDistance>{resultText}</TimeDistance>
    </SelectedInfo>
  );
};

export default ChallengeDistanceTmap;

const SelectedInfo = styled.div``;

const PlaceName = styled.p`
  font-size: 1.4rem;
  margin-bottom: 1rem;
  margin-right: 2rem;
`;

const TimeDistance = styled.p`
  font-size: 1.3rem;
  color: #555;
`;
