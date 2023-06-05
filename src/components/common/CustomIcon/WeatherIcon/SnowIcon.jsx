import React from "react";

import Snow from "../../../../assets/weather/snow.svg";

const SnowIcon = ({ size }) => {
  return (
    <button>
      <img
        src={Snow}
        alt="SnowIcon"
        style={{
          width: size,
          height: size,
          background: "transparent",
        }}
      />
    </button>
  );
};

export default SnowIcon;
