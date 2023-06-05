import React from "react";

import Happy from "../../../../assets/emotion/card/happy-card.svg";

const HappyCard = ({ size }) => {
  return (
    <button>
      <img
        src={Happy}
        alt="HappyCard"
        style={{
          width: size,
          height: size,
          background: "transparent",
        }}
      />
    </button>
  );
};

export default HappyCard;
