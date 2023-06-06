import React from "react";

import lv0 from "../../../../assets/user/lv0.svg";

const Level0 = ({ size }) => {
  return (
    <button>
      <img
        src={lv0}
        alt="Level0"
        style={{
          width: size,
          height: size,
          background: "transparent",
        }}
      />
    </button>
  );
};

export default Level0;
