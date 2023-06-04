import { atom } from "recoil";
/* import { recoilPersist } from "recoil-persist"; */

/* const { persistAtom } = recoilPersist(); */

const emotionState = atom({
  key: "emotionState",
  default: "surprised",
  /*   effects_UNSTABLE: [persistAtom], */
});

export default emotionState;
