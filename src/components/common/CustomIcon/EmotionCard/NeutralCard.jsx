import React from "react";

import Neutral from "../../../../assets/emotion/card/neutral-card.svg";

const NeutralCard = ({ size }) => {
  return (
    <button>
      <img
        src={Neutral}
        alt="NeutralCard"
        style={{
          width: size,
          height: size,
          background: "transparent",
        }}
      />
    </button>
  );
};

export default NeutralCard;
