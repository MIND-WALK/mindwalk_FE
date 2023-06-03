import React from "react";

import DownPour from "../../../../assets/weather/down-pour.svg";

const DownPourIcon = ({ size }) => {
  return (
    <button>
      <img
        src={DownPour}
        alt="DownPourIcon"
        style={{
          width: size,
          height: size,
          background: "transparent",
        }}
      />
    </button>
  );
};

export default DownPourIcon;
