import React from "react";
import Level from "../../components/views/Reward/Level";
import QuestTracker from "../../components/views/Reward/QuestTracker";
import CompletedList from "../../components/views/Reward/CompletedList";

export default function Reward() {
  return (
    <>
      <Level />
      <QuestTracker />
      <CompletedList />
    </>
  );
}
