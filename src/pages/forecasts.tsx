import React from "react";
import { useRecoilValue } from "recoil";
import { Link } from "react-router-dom"

import { cardData } from "../types/card";
import { weatherCardsState } from "../recoil/atoms";

function Forecasts() {
  const cardList: cardData[] = useRecoilValue(weatherCardsState);

  return <>
    <h1>Weather Cards</h1>
    {cardList.length > 0 && cardList.map(card => (
      <div key={card.id}>
        <h3>{card.temperature}</h3>
        <span>{card.humidity}</span><br />
        <span>{card.apparent_temperature}</span><br />
        <span>{card.wind_speed}</span>
      </div>)
    )}

    <Link to="/add-forecasts">Add new Forecast</Link>
  </>
}

export default Forecasts;