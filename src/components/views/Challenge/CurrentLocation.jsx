import React, { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import axios from "axios";

import { currentLocationLatState, currentLocationLongState } from "../../../recoil/challenge";

const CurrentLocation = () => {
  const [location, setLocation] = useState("");

  // 현재좌표 recoil에 저장
  const [currentLocationLong, setCurrentLocationLong] = useRecoilState(currentLocationLongState);
  const [currentLocationLat, setCurrentLocationLat] = useRecoilState(currentLocationLatState);

  const fetchLocationInfo = async (latitude, longitude) => {
    try {
      const response = await axios.get(
        `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage=ko`,
      );
      if (response.status === 200) {
        const { city, locality, principalSubdivision } = response.data;
        const formattedLocation = `${city} ${principalSubdivision} ${locality}`;

        setLocation(formattedLocation);
      } else {
        console.log("Error fetching location information.");
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        position => {
          const { latitude, longitude } = position.coords;
          fetchLocationInfo(latitude, longitude);
          setCurrentLocationLong(longitude);
          setCurrentLocationLat(latitude);
          // console.log(latitude, longitude);
        },
        error => {
          console.log(error);
        },
      );
    } else {
      console.log("Geolocation is not supported by this browser.");
    }
  }, [currentLocationLong, currentLocationLat]);

  return <>{location && <div>현재 위치 | {location}</div>}</>;
};

export default CurrentLocation;
