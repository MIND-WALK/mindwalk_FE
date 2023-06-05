import axios from "axios";
import React, { useEffect, useState } from "react";

const useMeasurementCheck = () => {
  const [measurementStatus, setMeasurementStatus] = useState(false);

  useEffect(() => {
    const getMeasurementStatus = async () => {
      const { data } = await axios.get(`http://54.180.88.103:4000/api/emotion/all/test`);

      console.log(data);

      const date = new Date();
      const year = date.getFullYear();
      const month = date.getMonth() + 1 >= 10 ? date.getMonth() + 1 : `0${date.getMonth() + 1}`;
      const day = date.getDate() >= 10 ? date.getDate() : `0${date.getDate() + 1}`;

      const today = `${year}-${month}-${day}`;

      const todayMeasurement = data.filter(challenge => challenge.createdAt.includes(today));

      if (todayMeasurement.length > 0) setMeasurementStatus(true);
      else setMeasurementStatus(false);
    };

    getMeasurementStatus();
  }, []);

  return [measurementStatus];
};

export default useMeasurementCheck;
