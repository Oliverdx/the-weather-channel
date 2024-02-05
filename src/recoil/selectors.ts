import { selectorFamily, useRecoilValue } from 'recoil';
import { atomData, weatherCardsState } from "./atoms";

export const updateWeatherCard = selectorFamily({
  key: 'updateWeatherCard',
  get: (id: string) => ({ get }) => {
    const cards = get(weatherCardsState);
    return cards.find((card) => card.id === id);
  },
  set: (id: string) => ({ set }, newValue) => {
    const cards = useRecoilValue(weatherCardsState);
    const updatedCards = cards.map((card: atomData) => {
      if (card.id === id) {
        return { ...card, ...newValue };
      }
      return card;
    });
    set(weatherCardsState, updatedCards);
  },
});

