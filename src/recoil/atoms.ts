import { atom } from "recoil";
import { cardData } from "../types/card";

export interface atomData extends cardData {
  updating: boolean
}

export const weatherCardsState = atom({
  key: 'WeatherCards',
  default: [] as atomData[]
});