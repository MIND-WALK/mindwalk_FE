import React from "react";
import Level from "../../components/views/MyJourney/Level";
import QuestTracker from "../../components/views/MyJourney/QuestTracker";
import CompletedList from "../../components/views/MyJourney/CompletedList";

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
