import React from "react";

import lv5 from "../../../../assets/user/lv5.svg";

const Level5 = ({ size }) => {
  return (
    <button>
      <img
        src={lv5}
        alt="Level5"
        style={{
          width: size,
          height: size,
          background: "transparent",
        }}
      />
    </button>
  );
};

export default Level5;
