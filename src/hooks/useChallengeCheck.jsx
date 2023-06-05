import axios from "axios";
import React, { useEffect, useState } from "react";

const useChallengeCheck = () => {
  const [challengeStatus, setChallengeStatus] = useState(false);

  useEffect(() => {
    const getChallengeStatus = async () => {
      const { data } = await axios.get(`http://54.180.88.103:4000/api/user/trip/test`);

      if (!data) {
        return;
      }

      const date = new Date();
      const year = date.getFullYear();
      const month = date.getMonth() + 1 >= 10 ? date.getMonth() + 1 : `0${date.getMonth() + 1}`;
      const day = date.getDate() >= 10 ? date.getDate() : `0${date.getDate() + 1}`;

      const today = `${year}-${month}-${day}`;

      const todayChallenge = data.filter(challenge => challenge.date === today);

      if (todayChallenge.length > 0) setChallengeStatus(true);
      else setChallengeStatus(false);
    };

    getChallengeStatus();
  }, []);

  return [challengeStatus];
};

export default useChallengeCheck;
