import React from "react";

import Stormy from "../../../../assets/weather/stormy.svg";

const StormyIcon = ({ size }) => {
  return (
    <button>
      <img
        src={Stormy}
        alt="StormyIcon"
        style={{
          width: size,
          height: size,
          background: "transparent",
        }}
      />
    </button>
  );
};

export default StormyIcon;
