import React from "react";

import Rain from "../../../../assets/weather/rain.svg";

const RainIcon = ({ size }) => {
  return (
    <button>
      <img
        src={Rain}
        alt="RainIcon"
        style={{
          width: size,
          height: size,
          background: "transparent",
        }}
      />
    </button>
  );
};

export default RainIcon;
