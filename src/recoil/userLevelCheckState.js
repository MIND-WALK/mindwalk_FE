import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist();

const userLevelCheckState = atom({
  key: "userLevelCheckState",
  default: "",
  effects_UNSTABLE: [persistAtom],
});

export default userLevelCheckState;
