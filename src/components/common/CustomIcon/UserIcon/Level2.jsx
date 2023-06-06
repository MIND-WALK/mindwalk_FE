import React from "react";

import lv2 from "../../../../assets/user/lv2.svg";

const Level2 = ({ size }) => {
  return (
    <button>
      <img
        src={lv2}
        alt="Level2"
        style={{
          width: size,
          height: size,
          background: "transparent",
        }}
      />
    </button>
  );
};

export default Level2;
