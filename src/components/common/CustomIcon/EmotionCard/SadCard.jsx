import React from "react";

import Sad from "../../../../assets/emotion/card/sad-card.svg";

const SadCard = ({ height }) => {
  return (
    <button>
      <img
        src={Sad}
        alt="SadCard"
        style={{
          height,
          background: "transparent",
        }}
      />
    </button>
  );
};

export default SadCard;
