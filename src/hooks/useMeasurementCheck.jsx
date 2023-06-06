import axios from "axios";
import React, { useEffect, useState } from "react";

const useMeasurementCheck = () => {
  const [measurementStatus, setMeasurementStatus] = useState(false);

  useEffect(() => {
    const getMeasurementStatus = async () => {
      const { data } = await axios.get(`http://54.180.88.103:4000/api/emotion/all/test`);

      const date = new Date();
      const year = date.getFullYear();
      const month = date.getMonth() + 1;
      const day = date.getDate();

      const today = `${year}. ${month}. ${day}.`;

      const todayMeasurement = data.filter(challenge => {
        const formatted = new Date(challenge.createdAt);

        return formatted.toLocaleString().includes(today);
      });

      if (todayMeasurement.length > 0) setMeasurementStatus(true);
      else setMeasurementStatus(false);
    };

    getMeasurementStatus();
  }, []);

  return [measurementStatus];
};

export default useMeasurementCheck;