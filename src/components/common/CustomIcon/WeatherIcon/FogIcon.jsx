import React from "react";

import Fog from "../../../../assets/weather/fog.svg";

const FogIcon = ({ size }) => {
  return (
    <button>
      <img
        src={Fog}
        alt="FogIcon"
        style={{
          width: size,
          height: size,
          background: "transparent",
        }}
      />
    </button>
  );
};

export default FogIcon;
