import React from "react";

import Sunny from "../../../../assets/weather/sunny.svg";

const SunnyIcon = ({ size }) => {
  return (
    <button>
      <img
        src={Sunny}
        alt="SunnyIcon"
        style={{
          width: size,
          height: size,
          background: "transparent",
        }}
      />
    </button>
  );
};

export default SunnyIcon;
