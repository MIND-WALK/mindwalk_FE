import React, { useEffect, useRef } from "react";
// eslint-disable-next-line import/no-extraneous-dependencies
import lottie from "lottie-web";
import loadingData from "../../assets/animation/loadingData.json";

const Animation = () => {
  const containerRef = useRef(null);
  const containerBox = document.getElementById("container");

  useEffect(() => {
    lottie.loadAnimation({
      container: containerBox,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: loadingData,
    });
  }, []);
  return (
    <div
      ref={containerRef}
      id="container"
      style={{
        width: "82.4vw",
        maxWidth: "309px",
        height: "25.337331334332834vh",
        maxHeight: "200px",
        margin: "0 auto",
      }}
    ></div>
  );
};

export default Animation;
