import React from "react";

import Natural from "../../../../assets/emotion/icon/natural-icon.svg";

const NaturalIcon = ({ size }) => {
  return (
    <button>
      <img
        src={Natural}
        alt="NaturalIcon"
        style={{
          width: size,
          height: size,
          background: "transparent",
        }}
      />
    </button>
  );
};

export default NaturalIcon;
