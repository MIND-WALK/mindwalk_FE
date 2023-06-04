import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist();

const userIdState = atom({
  key: "userId",
  default: "",
  effects_UNSTABLE: [persistAtom],
});

export default userIdState;
