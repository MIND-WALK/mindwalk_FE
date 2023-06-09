import React from "react";

import Surprised from "../../../../assets/emotion/card/surprised-card.svg";

const SurprisedCard = ({ size }) => {
  return (
    <button>
      <img
        src={Surprised}
        alt="SurprisedCard"
        style={{
          width: size,
          height: size,
          background: "transparent",
        }}
      />
    </button>
  );
};

export default SurprisedCard;
