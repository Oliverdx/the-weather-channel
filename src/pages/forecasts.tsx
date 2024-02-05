import React from "react";
import { useRecoilValue } from "recoil";
import { Link } from "react-router-dom"

import { atomData, weatherCardsState } from "../recoil/atoms";

import WeatherCard from "../components/WeatherCard";

import { ForecastPageWrapper, CardsWrapper } from "../styles/forecasts-style";

function Forecasts() {
  const cardList: atomData[] = useRecoilValue(weatherCardsState);

  return <ForecastPageWrapper>
    <h1>The Weather Channel - Seu canal do tempo</h1>
    {cardList.length === 0 &&
      <h2>Clique no Icone abaixo para adicionar a primeira previsão</h2>
    }

    <CardsWrapper>
      {cardList.length > 0 && cardList.map(card => (
        <WeatherCard key={card.id} data={card} />))
      }
    </CardsWrapper>

    <Link to="/add-forecasts" className="add_forecast-btn">
      <img src="/icons/add_forecast.svg" alt="Add new Forecast" />
    </Link>
  </ForecastPageWrapper>
}

export default Forecasts;