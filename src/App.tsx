
import React, { useEffect, useState } from 'react';
import fetchWeather from './utils/fetchWeather';
import { cardData } from './types/card';
import { GlobalStyle, MainStyle } from './styles/mainStyle';
import Input from './components/Input/index';

import styled from "styled-components";

export const AddData = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  
  h1{
    margin-bottom: 50px;
  }
`;

export const TwoColumns = styled.div`
display: flex;
justify-content: center;
column-count: 2;
`


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
      <AddData>
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
      </AddData>
    </MainStyle >
  </>;
};

export default App;
