import React, { useEffect, useState } from "react";

import Input from '../components/Input/index';
import Button from '../components/Button/index';

import fetchWeather from '../utils/fetchWeather';

import { cardData } from '../types/card';

import { AddData, TwoColumns } from "../styles/add-forecast-style";

function AddForecasts() {

  const [weather, setWeather] = useState<cardData | {}>({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchWeather("-14.875", "-40.875");
        setWeather(data);
      } catch (error) {
        console.error('Error fetching weather data:', error);
      }
    };

    fetchData();

  }, []);

  return <AddData>
    <h1>Entre com os dados de latitude e longitude<br />
      para adicionar um novo card</h1>
    <TwoColumns>
      <Input
        type="text"
        label="Latitude"
        required
      />

      <Input
        type="text"
        label="Longitude"
        required
      />
    </TwoColumns>
    <Button>
      Adicionar
    </Button>
  </AddData>
}

export default AddForecasts;