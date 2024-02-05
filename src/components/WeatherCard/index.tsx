import React, { useState } from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";

import { atomData, weatherCardsState } from "../../recoil/atoms";
import { removeWeatherCard, updateWeatherCard } from "../../recoil/selectors";

import fetchWeather from "../../utils/fetchWeather";

import {
  WeatherCardWrapper,
  CardTemperature,
  CardHeader,
  CardBody,
  CardFooter,
  SmallInfoWrapper,
  SmallInfo,
  ButtonsWrapper
} from "./style";

function WeatherCard({ data }: { data: atomData }) {
  const [updatingCard, setUpdatingCard] = useState(false);
  const updateData = useSetRecoilState(updateWeatherCard(data.id));
  const removeCard = useSetRecoilState(removeWeatherCard(data.id));

  const UpdateCard = async () => {
    setUpdatingCard(true);
    try {
      const cardUpdated: atomData = await fetchWeather(data.latitude, data.longitude, data.id);
      updateData(cardUpdated);
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
      <ButtonsWrapper>
        <button className="remove-btn" onClick={() => removeCard(data)}>
        </button>
        <button className="updating-btn" onClick={() => UpdateCard()}>
          <img
            className={`updating-btn_image-${updatingCard ? "updating" : "update"}`}
            src="/icons/update.svg"
            alt="Update Icon"
          />
        </button>

      </ButtonsWrapper>
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