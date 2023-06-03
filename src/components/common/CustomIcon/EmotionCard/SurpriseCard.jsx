import React from "react";

import Surprise from "../../../../assets/emotion/card/surprise-card.svg";

const SurpriseCard = ({ size }) => {
  return (
    <button>
      <img
        src={Surprise}
        alt="SurpriseCard"
        style={{
          width: size,
          height: size,
          background: "transparent",
        }}
      />
    </button>
  );
};

export default SurpriseCard;
