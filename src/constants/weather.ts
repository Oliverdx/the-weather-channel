import { weatherCodeType } from "../types/weather";

export const PARAMS = {
  current: ["temperature_2m", "relative_humidity_2m","apparent_temperature","weather_code","wind_speed_10m"],
  timezone: "America%2FSao_Paulo"
};

export const TRANSLATE_WEATHER: weatherCodeType = {
    0: "Céu limpo",
    1: "Principalmente limpo",
    2: "Parcialmente nublado",
    3: "Encoberto",
    45: "Nevoeiro e nevoeiro depositando rime",
    48: "Nevoeiro e nevoeiro depositando rime",
    51: "Chuvisco: Intensidade leve",
    53: "Chuvisco: Intensidade moderada",
    55: "Chuvisco: Intensidade densa",
    56: "Garoa congelante: Intensidade leve",
    57: "Garoa congelante: Intensidade densa",
    61: "Chuva: Intensidade leve",
    63: "Chuva: Intensidade moderada",
    65: "Chuva: Intensidade forte",
    66: "Chuva congelante: Intensidade leve",
    67: "Chuva congelante: Intensidade forte",
    71: "Neve: Intensidade leve",
    73: "Neve: Intensidade moderada",
    75: "Neve: Intensidade forte",
    77: "Grãos de neve",
    80: "Chuva de verão: Intensidade leve",
    81: "Chuva de verão: Intensidade moderada",
    82: "Chuva de verão: Intensidade violenta",
    85: "Neve de verão: Intensidade leve",
    86: "Neve de verão: Intensidade forte",
    95: "Trovoada: Intensidade leve ou moderada",
    96: "Trovoada com granizo leve",
    99: "Trovoada com granizo forte"
};

export const TRANSLATE_ICONS: weatherCodeType = {
  0: "/icons/sun.svg",
  1: "/icons/sun.svg",
  2: "/icons/fog_day.svg",
  3: "/icons/cloudy.svg",
  45: "/icons/cloudy.svg",
  48: "/icons/cloudy.svg",
  51: "/icons/rain.svg",
  53: "/icons/rain.svg",
  55: "/icons/rain_strong.svg",
  56: "/icons/rain_snow.svg",
  57: "/icons/rain_snow.svg",
  61: "/icons/rain.svg",
  63: "/icons/rain.svg",
  65: "/icons/rain_strong.svg",
  66: "/icons/rain_snow.svg",
  67: "/icons/rain_snow.svg",
  71: "/icons/snow.svg",
  73: "/icons/snow.svg",
  75: "/icons/snow.svg",
  77: "/icons/snow.svg",
  80: "/icons/sun_raining.svg",
  81: "/icons/sun_raining.svg",
  82: "/icons/sun_strom.svg",
  85: "/icons/snow_summer.svg",
  86: "/icons/snow_summer.svg",
  95: "/icons/storm.svg",
  96: "/icons/storm.svg",
  99: "/icons/storm.svg"
};

