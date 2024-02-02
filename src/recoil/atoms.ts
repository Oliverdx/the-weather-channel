import { atom } from "recoil";
import { cardData } from "../types/card";

export const weatherCardsState = atom({
  key: 'WeatherCards',
  default: [] as cardData[]
});