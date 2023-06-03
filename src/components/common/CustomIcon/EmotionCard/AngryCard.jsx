import React from "react";

import Angry from "../../../../assets/emotion/card/angry-card.svg";

const AngryCard = ({ size }) => {
  return (
    <button>
      <img
        src={Angry}
        alt="AngryCard"
        style={{
          width: size,
          height: size,
          background: "transparent",
        }}
      />
    </button>
  );
};

export default AngryCard;
