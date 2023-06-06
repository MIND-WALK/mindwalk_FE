import React from "react";

import lv1 from "../../../../assets/user/lv1.svg";

const Level1 = ({ size }) => {
  return (
    <button>
      <img
        src={lv1}
        alt="Level1"
        style={{
          width: size,
          height: size,
          background: "transparent",
        }}
      />
    </button>
  );
};

export default Level1;
