import axios from "axios";
import React, { useEffect, useState } from "react";

const useMeasurementCheck = () => {
  const [measurementStatus, setMeasurementStatus] = useState(false);

  useEffect(() => {
    const getMeasurementStatus = async () => {
      const { data } = await axios.get(`http://54.180.88.103:4000/api/emotion/all/test`);

      console.log(data);
    };

    getMeasurementStatus();
  }, []);

  return [measurementStatus];
};

export default useMeasurementCheck;
