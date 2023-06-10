import React from "react";

import Neutral from "../../../../assets/emotion/icon/neutral-icon.svg";

const NeutralIcon = ({ size }) => {
  return (
    <button>
      <img
        src={Neutral}
        alt="NeutralIcon"
        style={{
          width: size,
          height: size,
          background: "transparent",
        }}
      />
    </button>
  );
};

export default NeutralIcon;
