import React from "react";

import Angry from "../../../../assets/emotion/card/angry-card.svg";

const AngryCard = ({ height }) => {
  return (
    <button>
      <img
        src={Angry}
        alt="AngryCard"
        style={{
          height,
          background: "transparent",
        }}
      />
    </button>
  );
};

export default AngryCard;
