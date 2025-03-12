import React from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "/src/styles/WeatherCard.scss";
import FiveDayForecast from "./FiveDayForecast";
import {
  faTemperatureHalf,
  faWind,
  faSmog,
} from "@fortawesome/free-solid-svg-icons";
import {
  WiDaySunny,
  WiCloud,
  WiRain,
  WiSnow,
  WiThunderstorm,
} from "react-icons/wi";

const getWeatherIcon = (weather) => {
  switch (weather) {
    case "Clear":
      return <WiDaySunny />;
    case "Clouds":
      return <WiCloud />;
    case "Rain":
      return <WiRain />;
    case "Snow":
      return <WiSnow />;
    case "Thunderstorm":
      return <WiThunderstorm />;
    default:
      return <WiCloud />;
  }
};

const WeatherCard = ({ weatherData }) => {
  return (
    <motion.div
      className="weather-card"
      whileHover={{ scale: 1.07, color: "#f8e112" }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      <h2>
        {weatherData.name}, {weatherData.sys.country}
      </h2>
      <motion.div
        className="weather-icon"
        animate={{ rotate: [0, 10, -10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        {getWeatherIcon(weatherData.weather[0].main)}
      </motion.div>
      <h3>{weatherData.weather[0].description}</h3>
      <p>
        <FontAwesomeIcon icon={faTemperatureHalf} /> Temperature:{" "}
        {Math.round(weatherData.main.temp)}°C
      </p>
      <p>
        <FontAwesomeIcon icon={faWind} /> Wind Speed: {weatherData.wind.speed}{" "}
        m/s
      </p>
      <p>
        <FontAwesomeIcon icon={faSmog} /> AQI:{" "}
        {Math.round(weatherData.main.humidity)}%
      </p>
    </motion.div>
  );
};

export default WeatherCard;
