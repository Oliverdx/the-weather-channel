import React, { useState } from "react";
import { useRecoilState } from "recoil";

import { atomData, weatherCardsState } from "../../recoil/atoms";
import { TRANSLATE_ICONS, TRANSLATE_WEATHER } from "../../constants/weather";

import {
  WeatherCardWrapper,
  CardTemperature,
  CardHeader,
  CardBody,
  CardFooter,
  SmallInfoWrapper,
  SmallInfo
} from "./style";
import fetchWeather from "../../utils/fetchWeather";

function WeatherCard({ data }: { data: atomData }) {
  const [updatingCard, setUpdatingCard] = useState(false);

  const UpdateCard = async () => {
    setUpdatingCard(true);
    try {
      await fetchWeather(data.latitude, data.latitude, data.id);
      setUpdatingCard(false);
    } catch (err) {
      setUpdatingCard(false);
      console.error('Erro ao fazer o update do card')
    }
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