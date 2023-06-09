import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist();

const emotionState = atom({
  key: "emotion",
  default: { emotion: "", time: "" },
  effects_UNSTABLE: [persistAtom],
});

export const measurementCheckState = atom({
  key: "measurementCheckState",
  default: false,
  effects_UNSTABLE: [persistAtom],
});

export default emotionState;
