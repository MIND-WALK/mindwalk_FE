import React from "react";

import Surprise from "../../../../assets/emotion/icon/surprise-icon.svg";

const SurpriseIcon = ({ size }) => {
  return (
    <button>
      <img
        src={Surprise}
        alt="SurpriseIcon"
        style={{
          width: size,
          height: size,
          background: "transparent",
        }}
      />
    </button>
  );
};

export default SurpriseIcon;
