import { atom } from "recoil";

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
