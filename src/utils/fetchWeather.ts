import { PARAMS } from "../constants/weather";
import { cardData, weatherParams } from "../types/card";

async function fetchWeather(latitude: string, longitude: string){
  let weatherData: cardData;

  try{

    // Avoiding use NPM package, the NPM package has a automatically refresh
    // and we want to update manually
    const url = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}`;
  
    const response = await fetch(url.concat(normalizeParams(PARAMS)));
    const {current_units,  current } = await response.json();

    weatherData = {
      temperature: `${current?.temperature_2m}${current_units?.temperature_2m}`,
      humidity:`${current?.relative_humidity_2m}${current_units?.relative_humidity_2m}`,
      apparent_temperature:`${current?.apparent_temperature}${current_units?.apparent_temperature}`,
      wind_speed: `${current?.wind_speed_10m}${current_units?.wind_speed_10m}`
    }

  }catch(err){
    throw new Error(`Something got wrong ${err}`);
  }

  return weatherData;

}

function normalizeParams(params: weatherParams){
  const current = params.current.join(",")
  return `&current=${current}&timezone=${params.timezone}`;
}

export default fetchWeather;