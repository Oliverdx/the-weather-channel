import React, { useState } from "react";

import {
  WeatherCardWrapper,
  CardTemperature,
  CardHeader,
  CardBody,
  CardFooter,
  SmallInfo
} from "./style";
import { useRecoilState } from "recoil";
import { atomData, weatherCardsState } from "../../recoil/atoms";

function WeatherCard({ data }: { data: atomData }) {
  const [updatingCard, setUpdatingCard] = useState(false);

  const [cardList, setCardlist] = useRecoilState(weatherCardsState);

  const updatingList = (mockTemp?: string) => cardList.map((card): atomData => {
    if (card.id === data.id) {
      return {
        ...data,
        temperature: mockTemp || data.temperature,
        updating: !data.updating
      }
    }
    return card;
  });

  const UpdateCard = () => {
    setCardlist(updatingList());
    setUpdatingCard(true);

    setTimeout(() => {
      setCardlist(updatingList("21.3°C"));
      setUpdatingCard(false);
    }, 3000);
  }

  return <WeatherCardWrapper>
    <CardHeader>
      <p>Vitória da Conquista</p>
      <button className="updating-btn" onClick={() => UpdateCard()}>
        <img
          className={`updating-btn_image-${updatingCard ? "updating" : "update"}`}
          src="/icons/update.svg"
          alt="Update Icon"
        />
      </button>
    </CardHeader>
    <CardBody>
      <div className="weather">
        <img className="weather_image" src="/icons/weather-icon.svg" alt="Weather icon" />
      </div>
      <p className="weather_description">{data.weather}</p>
    </CardBody>
    <CardFooter>
      <SmallInfo>
        <span>{data.humidity}</span><br />
        <span>{data.apparent_temperature}</span><br />
        <span>{data.wind_speed}</span>
      </SmallInfo>
      <CardTemperature>{data.temperature}</CardTemperature>
    </CardFooter>
  </WeatherCardWrapper>
}

export default WeatherCard;