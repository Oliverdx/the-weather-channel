import React from "react";
import { useRecoilValue } from "recoil";
import { Link } from "react-router-dom"

import { atomData, weatherCardsState } from "../recoil/atoms";

import WeatherCard from "../components/WeatherCard";
import { ForecastPageWrapper, CardsWrapper } from "../styles/forecasts-style";
import { TRANSLATE_ICONS, TRANSLATE_WEATHER } from "../constants/weather";

function Forecasts() {
  const cardList: atomData[] = useRecoilValue(weatherCardsState);

  const mockData: atomData = {
    latitude: "14.5153",
    longitude: "40.5013",
    apparent_temperature: "23.3°C",
    weather: TRANSLATE_WEATHER[1],
    weather_icon: TRANSLATE_ICONS[1],
    humidity: "82%",
    id: "38i04",
    temperature: "21.9°C",
    wind_speed: "12.2km/h",
    updating: false
  }

  return <ForecastPageWrapper>
    <h1>The Weather Channel - Seu canal do tempo</h1>
    {cardList.length === 0 &&
      <h2>Clique no Icone abaixo para adicionar a primeira previsão</h2>
    }

    <CardsWrapper>
      {cardList.length > 0 && cardList.map(card => (
        <WeatherCard key={card.id} data={card} />))
      }
      <WeatherCard key={mockData.id} data={mockData} />
    </CardsWrapper>

    <Link to="/add-forecasts" className="add_forecast-btn">
      <img src="/icons/add_forecast.svg" alt="Add new Forecast" />
    </Link>
  </ForecastPageWrapper>
}

export default Forecasts;