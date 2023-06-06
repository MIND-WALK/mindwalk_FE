import React from "react";

import lv4 from "../../../../assets/user/lv4.svg";

const Level4 = ({ size }) => {
  return (
    <button>
      <img
        src={lv4}
        alt="Level4"
        style={{
          width: size,
          height: size,
          background: "transparent",
        }}
      />
    </button>
  );
};

export default Level4;
