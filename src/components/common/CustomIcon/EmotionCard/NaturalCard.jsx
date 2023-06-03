import React from "react";

import Natural from "../../../../assets/emotion/card/natural-card.svg";

const NaturalCard = ({ size }) => {
  return (
    <button>
      <img
        src={Natural}
        alt="NaturalCard"
        style={{
          width: size,
          height: size,
          background: "transparent",
        }}
      />
    </button>
  );
};

export default NaturalCard;
