import React from "react";

import Cloudy from "../../../../assets/weather/cloudy.svg";

const CloudyIcon = ({ size }) => {
  return (
    <button>
      <img
        src={Cloudy}
        alt="CloudyIcon"
        style={{
          width: size,
          height: size,
          background: "transparent",
        }}
      />
    </button>
  );
};

export default CloudyIcon;
