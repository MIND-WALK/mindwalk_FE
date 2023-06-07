import axios from "axios";
import React, { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import userIdState from "../recoil/userIdState";

const useChallengeCheck = () => {
  const [challengeStatus, setChallengeStatus] = useState(false);

  const [userAuthState] = useRecoilState(userIdState);

  useEffect(() => {
    const getChallengeStatus = async () => {
      const { data } = await axios.get(`/api/user/trip/${userAuthState}`);

      if (!data) {
        return;
      }

      const date = new Date();
      const year = date.getFullYear();
      const month = date.getMonth() + 1 >= 10 ? date.getMonth() + 1 : `0${date.getMonth() + 1}`;
      const day = date.getDate() >= 10 ? date.getDate() : `0${date.getDate()}`;

      const today = `${year}-${month}-${day}`;

      const todayChallenge = data.filter(challenge => challenge.date === today);

      console.log(todayChallenge);

      if (todayChallenge.length > 0) setChallengeStatus(true);
      else setChallengeStatus(false);
    };

    getChallengeStatus();
  }, []);

  return [challengeStatus];
};

export default useChallengeCheck;
