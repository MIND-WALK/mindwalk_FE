import React from "react";

import lv3 from "../../../../assets/user/lv3.svg";

const Level3 = ({ size }) => {
  return (
    <button>
      <img
        src={lv3}
        alt="Level3"
        style={{
          width: size,
          height: size,
          background: "transparent",
        }}
      />
    </button>
  );
};

export default Level3;
