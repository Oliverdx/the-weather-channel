import { PARAMS, TRANSLATE_ICONS, TRANSLATE_WEATHER } from "../constants/weather";
import { cardData, weatherParams } from "../types/card";

async function fetchWeather(latitude: string, longitude: string){
  let weatherData: cardData;

  try{

    // Avoiding use NPM package, the NPM package has a automatically refresh
    // and for now we want to update manually
    const url = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}`;
  
    const response = await fetch(url.concat(normalizeParams(PARAMS)));
    const {current_units,  current } = await response.json();

    if(current?.temperature_2m === undefined)
      throw new Error(`Por favor verifique os dados digitados e tente novamente`);

    weatherData = {
      id: (Math.random() + 1).toString(36).substring(7),
      latitude: latitude,
      longitude: longitude,
      weather: `${TRANSLATE_WEATHER[current?.weather_code]}`,
      weather_icon: `${TRANSLATE_ICONS[current?.weather_code]}`,
      temperature: `${current?.temperature_2m}${current_units?.temperature_2m}`,
      humidity:`${current?.relative_humidity_2m}${current_units?.relative_humidity_2m}`,
      apparent_temperature:`${current?.apparent_temperature}${current_units?.apparent_temperature}`,
      wind_speed: `${current?.wind_speed_10m}${current_units?.wind_speed_10m}`
    }

  }catch(err){
    throw new Error(`Algo deu errado: ${err}`);
  }

  return weatherData;

}

function normalizeParams(params: weatherParams){
  const current = params.current.join(",")
  return `&current=${current}&timezone=${params.timezone}`;
}

export default fetchWeather;
