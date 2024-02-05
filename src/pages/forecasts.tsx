import React, { useEffect, useState } from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { Link } from "react-router-dom"

import { atomData, weatherCardsState } from "../recoil/atoms";

import WeatherCard from "../components/WeatherCard";

import { ForecastPageWrapper, CardsWrapper } from "../styles/forecasts-style";
import { cardListFromLocal } from "../recoil/selectors";

function Forecasts() {
  const [weatherCardsList, setWeatherCardsList] = useState([] as atomData[]);

  const cardList: atomData[] = useRecoilValue(weatherCardsState);
  const localCards: atomData[] = useRecoilValue(cardListFromLocal);
  const setCardlist = useSetRecoilState(weatherCardsState);

  useEffect(() => {
    if (cardList.length === 0 && localCards) { //Verify if Local has any key first
      setWeatherCardsList(localCards);
      setCardlist(localCards);
    } else if (cardList) {
      setWeatherCardsList(cardList);
    }
  }, [localCards, cardList]);

  return <ForecastPageWrapper>
    <h1>The Weather Channel - Seu canal do tempo</h1>
    {weatherCardsList.length === 0 &&
      <h2>Clique no Icone abaixo para adicionar a primeira previsão</h2>
    }

    <CardsWrapper>
      {weatherCardsList.length > 0 && weatherCardsList.map(card => (
        <WeatherCard key={card.id} data={card} />))
      }
    </CardsWrapper>

    <Link to="/add-forecasts" className="add_forecast-btn">
      <img src="/icons/add_forecast.svg" alt="Add new Forecast" />
    </Link>
  </ForecastPageWrapper>
}

export default Forecasts;