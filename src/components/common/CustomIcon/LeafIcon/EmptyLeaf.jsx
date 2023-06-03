import React from "react";

import EmptyLeafIcon from "../../../../assets/icon/empty-leaf.svg";

const EmptyLeaf = ({ size }) => {
  return (
    <button>
      <img
        src={EmptyLeafIcon}
        alt="EmptyLeafIcon"
        style={{
          width: size,
          height: size,
          background: "transparent",
        }}
      />
    </button>
  );
};

export default EmptyLeaf;
