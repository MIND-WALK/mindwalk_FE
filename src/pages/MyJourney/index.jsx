import React from "react";
import Level from "../../components/views/MyJourney/Level";
import QuestTracker from "../../components/views/MyJourney/AchivementTracker";
import CompletedList from "../../components/views/MyJourney/AchivementList";

const MyJourney = () => {
  return (
    <>
      <Level />
      <QuestTracker />
      <CompletedList />
    </>
  );
};

export default MyJourney;
