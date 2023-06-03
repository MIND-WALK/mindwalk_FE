import React from "react";

import FullLeafIcon from "../../../../assets/icon/full-leaf.svg";

const FullLeaf = ({ size }) => {
  return (
    <button>
      <img
        src={FullLeafIcon}
        alt="FullLeafIcon"
        style={{
          width: size,
          height: size,
          background: "transparent",
        }}
      />
    </button>
  );
};

export default FullLeaf;
