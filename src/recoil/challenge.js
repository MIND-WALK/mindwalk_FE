import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist();

export const locationNameState = atom({
  key: "locationNameState",
  default: "",
});

export const locationLongState = atom({
  key: "locationLongState",
  default: "",
});
export const locationLatState = atom({
  key: "locationLatState",
  default: "",
});

export const currentLocationLongState = atom({
  key: "currentLocationLongState",
  default: "",
});
export const currentLocationLatState = atom({
  key: "currentLocationLatState",
  default: "",
});

export const challengeRangeCheck = atom({
  key: "challengeRangeCheck",
  default: "",
});

export const challengeImgState = atom({
  key: "challengeImgState",
  default: "",
});

export const challengeDistanceState = atom({
  key: "challengeDistanceState",
  default: "",
});

export const challengeCheckState = atom({
  key: "challengeCheckState",
  default: false,
  effects_UNSTABLE: [persistAtom],
});
