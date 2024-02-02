import React, { useState } from "react";
import { useSetRecoilState } from "recoil";
import { useNavigate } from "react-router-dom";

import Input from '../components/Input/index';
import Button from '../components/Button/index';

import fetchWeather from '../utils/fetchWeather';

import { AddData, TwoColumns } from "../styles/add-forecast-style";
import { weatherCardsState } from "../recoil/atoms";

import { cardData } from "../types/card";

function AddForecasts() {
  const [error, setError] = useState("");
  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");

  const setCardlist = useSetRecoilState(weatherCardsState);

  const navigate = useNavigate();

  const addCard = (data: cardData) => {
    let newCardList: cardData[] = [];

    setCardlist((oldCards) => {
      newCardList = [
        ...oldCards,
        { ...data },
      ];
      window.localStorage.setItem('weatherCards', JSON.stringify(newCardList))

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
  const fetchData = async () => {
    try {
      // const data: cardData = await fetchWeather("-14.875", "-40.875");
      const data: cardData = await fetchWeather(latitude, longitude);
      addCard(data);
    } catch (error) {
      setError(`Erro ao recuperar os dados: ${error}`);
    }
  };

  const handleCatchData = (value: string, type: "latitude" | "longitude") => {
    if (type === "longitude") {
      setLongitude(value);
    } else {
      setLatitude(value);
    }
  }

  // TO DO
  // In future we can allow the user to add in bulk the latitude and logitude
  // allowing add more than one at same time
  // PS: Will be necessary add openmeteo library

  return <AddData>
    <h1>Entre com os dados de latitude e longitude<br />
      para adicionar um novo card</h1>
    <TwoColumns>
      <Input
        type="text"
        label="Latitude"
        onChange={event => handleCatchData(event.target.value, "latitude")}
        required
      />
      <Input
        type="text"
        label="Longitude"
        onChange={event => handleCatchData(event.target.value, "longitude")}
        required
      />
    </TwoColumns>
    <Button onClick={() => fetchData()}>
      Adicionar
    </Button>
    {error !== "" && <p>{error}</p>}
  </AddData>
}

export default AddForecasts;