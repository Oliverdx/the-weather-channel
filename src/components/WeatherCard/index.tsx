import React, { useState } from "react";
import { useRecoilState } from "recoil";

import { atomData, weatherCardsState } from "../../recoil/atoms";

import {
  WeatherCardWrapper,
  CardTemperature,
  CardHeader,
  CardBody,
  CardFooter,
  SmallInfoWrapper,
  SmallInfo
} from "./style";

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
      <div className="position">
        <p>Lat: {data.latitude}</p>
        <p>Log: {data.longitude}</p>
      </div>
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
        <img className="weather_image" src={data.weather_icon} alt="Weather icon" />
      </div>
      <p className="weather_description">{data.weather}</p>
    </CardBody>
    <CardFooter>
      <SmallInfoWrapper>
        <SmallInfo>
          <img src="/icons/humidity.svg" />
          <span>{data.humidity}</span>
        </SmallInfo>
        <SmallInfo>
          <img src="/icons/apparent_temperature.svg" />
          <span>{data.apparent_temperature}</span>
        </SmallInfo>
        <SmallInfo>
          <img src="/icons/wind_speed.svg" />
          <span>{data.wind_speed}</span>
        </SmallInfo>
      </SmallInfoWrapper>
      <CardTemperature>{data.temperature}</CardTemperature>
    </CardFooter>
  </WeatherCardWrapper>
}

export default WeatherCard;