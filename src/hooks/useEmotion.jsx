import AngryIcon from "../components/common/CustomIcon/EmotionIcon/AngryIcon";
import HappyIcon from "../components/common/CustomIcon/EmotionIcon/HappyIcon";
import NeutralIcon from "../components/common/CustomIcon/EmotionIcon/NeutralIcon";
import SadIcon from "../components/common/CustomIcon/EmotionIcon/SadIcon";
import SurpriseIcon from "../components/common/CustomIcon/EmotionIcon/SurprisedIcon";

export const useEmotion = color => {
  if (color === "#F2ACCE") {
    return <HappyIcon size="6rem" />;
  }
  if (color === "#8AB2E5") {
    return <SadIcon size="5rem" />;
  }
  if (color === "#B3DAC1") {
    return <NeutralIcon size="5rem" />;
  }
  if (color === "#DC6750") {
    return <AngryIcon size="5rem" />;
  }
  if (color === "#FAEA94") {
    return <SurpriseIcon size="6rem" />;
  }
  return null;
};
