export interface weatherParams {
  current: string[];
  timezone: string;
}

export interface cardData {
  id: string,
  weather: string,
  temperature: string,
  humidity: string,
  apparent_temperature: string,
  wind_speed: string
}

export interface cardList {
  cards: cardData[]
}
