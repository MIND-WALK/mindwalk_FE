import axios from "axios";
import React, { useEffect, useState } from "react";
import { useRecoilState, useSetRecoilState } from "recoil";
import userIdState from "../recoil/userIdState";
import { challengeCheckState } from "../recoil/challenge";

const useChallengeCheck = () => {
  const setChallengeCheckState = useSetRecoilState(challengeCheckState);

  const [userAuthState] = useRecoilState(userIdState);

  useEffect(() => {
    const getChallengeStatus = async () => {
      const { data } = await axios.get(`/api/user/trip/${userAuthState}`);

      const date = new Date();
      const year = date.getFullYear();
      const month = date.getMonth() + 1 >= 10 ? date.getMonth() + 1 : `0${date.getMonth() + 1}`;
      const day = date.getDate() >= 10 ? date.getDate() : `0${date.getDate()}`;

      const today = `${year}-${month}-${day}`;

      const todayChallenge = data.filter(challenge => challenge.date === today);

      if (todayChallenge.length > 0) setChallengeCheckState(true);
      else setChallengeCheckState(false);
    };

    getChallengeStatus();
  }, []);
};

export default useChallengeCheck;
