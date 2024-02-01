
import React, { useEffect, useState } from 'react';
import fetchWeather from './utils/fetchWeather';
import { cardData } from './types/card';

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


  return <div>
    <div>
      {Object.keys(weather).length > 0 &&
        <p>{(weather as cardData).temperature}</p>
      }
    </div>
  </div>;
};

export default App;
