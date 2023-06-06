import React, { useEffect, useState } from "react";
import axios from "axios";
import { useRecoilState } from "recoil";
import Level from "../../components/views/MyJourney/Level";
import QuestTracker from "../../components/views/MyJourney/AchivementTracker";
import CompletedList from "../../components/views/MyJourney/AchivementList";
import LEVEL from "../../constants/level";
import userIdState from "../../recoil/userIdState";

const MyJourney = () => {
  const url = process.env.REACT_APP_API_URL;

  const [questInfo, setQuestInfo] = useState({ check: 0, all: 0 });
  const [levelNum, setLevelNum] = useState();

  const [userAuthState] = useRecoilState(userIdState);

  useEffect(() => {
    const getQuestNum = async () => {
      try {
        const { data } = await axios.get(
          `/api/user/trip/all/${userAuthState}`,
        );

        setQuestInfo(data);
      } catch (err) {
        console.log(err);
      }
    };

    getQuestNum();
  }, []);

  useEffect(() => {
    const { level } = LEVEL.find(ele => ele.condition > questInfo.check);
    setLevelNum(level - 1);
  }, [questInfo]);

  return (
    <>
      {levelNum && <Level level={levelNum} />}
      {levelNum && <QuestTracker questInfo={questInfo} nextLevel={levelNum} />}
      {questInfo && <CompletedList questInfo={questInfo} />}
    </>
  );
};

export default MyJourney;
