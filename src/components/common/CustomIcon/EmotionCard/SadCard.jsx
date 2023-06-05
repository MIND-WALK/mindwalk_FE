import React from "react";

import Sad from "../../../../assets/emotion/card/sad-card.svg";

const SadCard = ({ size }) => {
  return (
    <button>
      <img
        src={Sad}
        alt="SadCard"
        style={{
          width: size,
          height: size,
          background: "transparent",
        }}
      />
    </button>
  );
};

export default SadCard;
