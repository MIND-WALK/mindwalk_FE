import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist();

const emotionState = atom({
  key: "emotion",
  default: "",
  effects_UNSTABLE: [persistAtom],
});

export default emotionState;
