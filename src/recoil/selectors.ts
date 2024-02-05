import { atom, selector, selectorFamily, useRecoilValue } from 'recoil';
import { atomData, weatherCardsState } from "./atoms";

export const cardListFromLocal = selector({
  key: 'localCardList',
  get: () => {
    const localCardList = localStorage.getItem("weatherCards");
    const cards: atomData[] = localCardList ?  JSON.parse(localCardList) : [];
    return cards;
  }
});

export const updateWeatherCard = selectorFamily({
  key: 'updateWeatherCard',
  get: (id: string) => ({ get }) => {
    const cards = get(weatherCardsState);
    return cards.find((card) => card.id === id);
  },
 set: (id: string) => ({set}, newValue) =>{
    // @ts-ignore
    set(weatherCardsState, prevState => {
      const newCards = prevState?.map(card => card.id === id ? newValue ?? {} : card) ?? [];
      window.localStorage.setItem('weatherCards', JSON.stringify(newCards));
      return newCards;
    })
  }
});