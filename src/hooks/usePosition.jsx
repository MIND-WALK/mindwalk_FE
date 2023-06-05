import { useState } from "react";

const usePosition = () => {
  const [position, setPosition] = useState(null);
  const [error, setError] = useState(null);

  const getPosition = () => {
    return new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(
        pos => {
          setPosition(pos);
          resolve(pos);
        },
        err => {
          setError(err);
          reject(err);
        },
      );
    });
  };

  return { position, error, getPosition };
};

export default usePosition;
