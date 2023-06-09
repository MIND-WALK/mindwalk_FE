import axios from "axios";
import React, { useEffect, useState } from "react";
import { useRecoilState, useSetRecoilState } from "recoil";
import userIdState from "../recoil/userIdState";
import { measurementCheckState } from "../recoil/emotionState";

const useMeasurementCheck = () => {
  const setMeasurementCheckState = useSetRecoilState(measurementCheckState);

  const [userAuthState] = useRecoilState(userIdState);

  useEffect(() => {
    const getMeasurementStatus = async () => {
      const { data } = await axios.get(`/api/emotion/all/${userAuthState}`);

      const date = new Date();
      const year = date.getFullYear();
      const month = date.getMonth() + 1;
      const day = date.getDate();

      const today = `${year}. ${month}. ${day}.`;

      const todayMeasurement = data.filter(challenge => {
        const formatted = new Date(challenge.createdAt);

        return formatted.toLocaleString().includes(today);
      });

      if (todayMeasurement.length > 0) setMeasurementCheckState(true);
      else setMeasurementCheckState(false);
    };

    getMeasurementStatus();
  }, []);
};

export default useMeasurementCheck;
