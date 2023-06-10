import React from "react";

import Surprised from "../../../../assets/emotion/card/surprised-card.svg";

const SurprisedCard = ({ height }) => {
  return (
    <button>
      <img
        src={Surprised}
        alt="SurprisedCard"
        style={{
          height,
          background: "transparent",
        }}
      />
    </button>
  );
};

export default SurprisedCard;
