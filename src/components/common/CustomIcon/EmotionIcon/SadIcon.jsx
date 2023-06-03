import React from "react";

import Sad from "../../../../assets/emotion/sad-icon.svg";

const SadIcon = ({ size }) => {
  return (
    <button>
      <img
        src={Sad}
        alt="SadIcon"
        style={{
          width: size,
          height: size,
          background: "transparent",
        }}
      />
    </button>
  );
};

export default SadIcon;
