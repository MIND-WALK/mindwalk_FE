import React from "react";

import Surprised from "../../../../assets/emotion/icon/surprised-icon.svg";

const SurprisedIcon = ({ size }) => {
  return (
    <button>
      <img
        src={Surprised}
        alt="SurprisedIcon"
        style={{
          width: size,
          height: size,
          background: "transparent",
        }}
      />
    </button>
  );
};

export default SurprisedIcon;
