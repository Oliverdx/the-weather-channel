
import React, { useEffect, useState } from 'react';
import fetchWeather from './utils/fetchWeather';
import { cardData } from './types/card';
import { GlobalStyle, MainStyle } from './styles/mainStyle';

const App: React.FC = () => {

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


  return <>
    <GlobalStyle />
    <MainStyle>
      <h1>Entre com os dados de latitude e longitude<br />
        para adicionar um novo card</h1>

      <p>Latitude</p>
      <p>Longitude</p>
    </MainStyle >
  </>;
};

export default App;
