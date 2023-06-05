import React, { useEffect, useState } from "react";
import axios from "axios";
import Level from "../../components/views/MyJourney/Level";
import QuestTracker from "../../components/views/MyJourney/AchivementTracker";
import CompletedList from "../../components/views/MyJourney/AchivementList";
import LEVEL from "../../constants/level";

const MyJourney = () => {
  const url = process.env.REACT_APP_API_URL;

  const [questNumInfo, setQuestNumInfo] = useState({ check: 0, all: 0 });
  const [levelNum, setLevelNum] = useState();

  useEffect(() => {
    const getQuestNum = async () => {
      try {
        const { data } = await axios.get(`http://54.180.88.103:4000/api/user/trip/all/test`);

        setQuestNumInfo(data);
      } catch (err) {
        console.log(err);
      }
    };

    getQuestNum();
  }, []);

  useEffect(() => {
    const { level } = LEVEL.find(ele => ele.condition > questNumInfo.check);
    setLevelNum(level - 1);
  }, [questNumInfo]);

  return (
    <>
      {levelNum && <Level level={levelNum} />}
      {levelNum && <QuestTracker questNumInfo={questNumInfo} nextLevel={levelNum} />}
      <CompletedList />
    </>
  );
};

export default MyJourney;
