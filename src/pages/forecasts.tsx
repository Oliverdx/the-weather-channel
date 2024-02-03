import React from "react";
import { useRecoilValue } from "recoil";
import { Link } from "react-router-dom"

import { cardData } from "../types/card";
import { atomData, weatherCardsState } from "../recoil/atoms";

import WeatherCard from "../components/WeatherCard";
import { CardsWrapper } from "../styles/forecasts-style";

function Forecasts() {
  const cardList: atomData[] = useRecoilValue(weatherCardsState);

  const mockData = {
    apparent_temperature: "23.3°C",
    humidity: "82%",
    id: "38i04",
    temperature: "21.9°C",
    wind_speed: "12.2km/h",
    updating: false
  }

  return <>
    <h1>The Weather Channel</h1>
    <CardsWrapper>

      {cardList.length > 0 && cardList.map(card => (
        <WeatherCard key={card.id} data={card} />))}
    </CardsWrapper>

    <Link to="/add-forecasts">Add new Forecast</Link>
  </>
}

export default Forecasts;