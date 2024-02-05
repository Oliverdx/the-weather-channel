import React, { useState } from "react";
import { useSetRecoilState } from "recoil";
import { useNavigate } from "react-router-dom";

import Input from '../components/Input/index';
import Button from '../components/Button/index';

import fetchWeather from '../utils/fetchWeather';

import { AddData, TwoColumns } from "../styles/add-forecast-style";
import { atomData, weatherCardsState } from "../recoil/atoms";

import { cardData } from "../types/card";

function AddForecasts() {
  const [error, setError] = useState("");
  const [latLong, setLatLong] = useState("");

  const setCardlist = useSetRecoilState(weatherCardsState);

  const navigate = useNavigate();

  const addCard = (data: cardData) => {
    let newCardList: atomData[] = [];

    setCardlist((oldCards) => {
      newCardList = [
        ...oldCards,
        { ...data, updating: false },
      ];
      window.localStorage.setItem('weatherCards', JSON.stringify(newCardList));

      return newCardList;
    });

    if (newCardList.length > 0) {
      setError("");
      navigate("/forecasts");
    } else {
      setError("Parece que não conseguimos adicionar a previsão, por favor tente novamente")
    }
  }

  // useEffect(() => {
  const fetchData = async (lat: string, long: string) => {
    try {
      // const data: cardData = await fetchWeather("-14.875", "-40.875");
      const data: cardData = await fetchWeather(lat, long);
      addCard(data);
    } catch (error) {
      setError(`Erro ao recuperar os dados: ${error}`);
    }
  };

  const isValidCoordinates = () => {
    const coordinatesPattern = /^([-+]?\d{1,3}(?:\.\d{1,})?)(?:,\s*|,\s+)?([-+]?\d{1,3}(?:\.\d{1,})?)$/;
    const match = latLong.match(coordinatesPattern);

    if (match) {
      const latitude = parseFloat(match[1]);
      const longitude = parseFloat(match[2]);

      if (longitude >= -180 && longitude <= 180 &&
        latitude >= -90 && latitude <= 90
      ) {
        fetchData(latitude.toString(), longitude.toString())
      } else {
        setError("Formatação incorreta, Por favor use um formato Ex: 12.3456, -78.9012");
      }
    }
  }

  // TO DO
  // In future we can allow the user to add in bulk the latitude and logitude
  // allowing add more than one at same time
  // PS: Will be necessary add openmeteo library

  return <AddData>
    <h1 className="title">Entre com os dados de latitude e longitude
      para adicionar um novo card</h1>
    <span className="subtitle">Use o formato "XX.XXX, XXX.XXX", separando latitude e longitude por virgula</span>
    <TwoColumns>
      <Input
        type="textr"
        label="Latitude & Longitude"
        onChange={event => setLatLong(event.target.value)}
        required
      />
    </TwoColumns>
    <Button onClick={() => isValidCoordinates()}>
      Adicionar
    </Button>
    {error !== "" && <p className="text-error">{error}</p>}
  </AddData>
}

export default AddForecasts;