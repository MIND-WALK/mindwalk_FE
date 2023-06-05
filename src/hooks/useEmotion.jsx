/* eslint-disable react/react-in-jsx-scope */
import AngryIcon from "../components/common/CustomIcon/EmotionIcon/AngryIcon";
import HappyIcon from "../components/common/CustomIcon/EmotionIcon/HappyIcon";
import NaturalIcon from "../components/common/CustomIcon/EmotionIcon/NaturalIcon";
import SadIcon from "../components/common/CustomIcon/EmotionIcon/SadIcon";
import SurpriseIcon from "../components/common/CustomIcon/EmotionIcon/SurpriseIcon";

export const useEmotion = color => {
  if (color === "#F2ACCE") {
    return <HappyIcon size="6.7rem" />;
  }
  if (color === "#8AB2E5") {
    return <SadIcon size="6.7rem" />;
  }
  if (color === "#B3DAC1") {
    return <NaturalIcon size="5.7rem" />;
  }
  if (color === "#DC6750") {
    return <AngryIcon size="5.7rem" />;
  }
  if (color === "#FAEA94") {
    return <SurpriseIcon size="6.7rem" />;
  }
  return null;
};
