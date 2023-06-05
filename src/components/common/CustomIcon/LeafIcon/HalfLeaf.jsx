import React from "react";

import HalfLeafIcon from "../../../../assets/icon/half-leaf.svg";

const HalfLeaf = ({ size }) => {
  return (
    <button>
      <img
        src={HalfLeafIcon}
        alt="HalfLeafIcon"
        style={{
          width: size,
          height: size,
          background: "transparent",
        }}
      />
    </button>
  );
};

export default HalfLeaf;
