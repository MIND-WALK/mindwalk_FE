import React from "react";

import Neutral from "../../../../assets/emotion/card/neutral-card.svg";

const NeutralCard = ({ height }) => {
  return (
    <button>
      <img
        src={Neutral}
        alt="NeutralCard"
        style={{
          height,
          background: "transparent",
        }}
      />
    </button>
  );
};

export default NeutralCard;
