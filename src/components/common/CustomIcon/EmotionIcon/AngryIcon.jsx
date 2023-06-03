import React from "react";

import Angry from "../../../../assets/emotion/icon/angry-icon.svg";

const AngryIcon = ({ size }) => {
  return (
    <button>
      <img
        src={Angry}
        alt="AngryIcon"
        style={{
          width: size,
          height: size,
          background: "transparent",
        }}
      />
    </button>
  );
};

export default AngryIcon;
