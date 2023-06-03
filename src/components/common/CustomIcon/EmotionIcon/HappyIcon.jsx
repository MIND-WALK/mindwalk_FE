import React from "react";

import Happy from "../../../../assets/emotion/icon/happy-icon.svg";

const HappyIcon = ({ size }) => {
  return (
    <button>
      <img
        src={Happy}
        alt="HappyIcon"
        style={{
          width: size,
          height: size,
          background: "transparent",
        }}
      />
    </button>
  );
};

export default HappyIcon;
