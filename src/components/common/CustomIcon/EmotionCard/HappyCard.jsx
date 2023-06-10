import React from "react";

import Happy from "../../../../assets/emotion/card/happy-card.svg";

const HappyCard = ({ height }) => {
  return (
    <button>
      <img
        src={Happy}
        alt="HappyCard"
        style={{
          height,
          background: "transparent",
        }}
      />
    </button>
  );
};

export default HappyCard;
