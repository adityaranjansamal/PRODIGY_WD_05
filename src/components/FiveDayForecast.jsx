import React, { useEffect, useState } from "react";
import { fetchForecast } from "../api"; // Import from api.js
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSun,
  faCloud,
  faCloudRain,
  faSnowflake,
  faBolt,
  faSmog,
} from "@fortawesome/free-solid-svg-icons";
import "/src/styles/FiveDayForecast.scss";

// Map weather condition to Font Awesome icons
const getWeatherIcon = (condition) => {
  switch (condition) {
    case "Clear":
      return faSun;
    case "Clouds":
      return faCloud;
    case "Rain":
      return faCloudRain;
    case "Snow":
      return faSnowflake;
    case "Thunderstorm":
      return faBolt;
    case "Mist":
    case "Fog":
    case "Haze":
      return faSmog;
    default:
      return faCloud;
  }
};

const FiveDayForecast = ({ lat, lon }) => {
  const [forecast, setForecast] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!lat || !lon) return;

    const getForecast = async () => {
      try {
        const data = await fetchForecast(lat, lon);

        if (!data || !data.list) {
          throw new Error("Invalid forecast data");
        }

        const dailyForecast = data.list
          .filter((entry) => entry.dt_txt.includes("12:00:00"))
          .slice(0, 5) // Get only 5 days weather data
          .map((entry) => ({
            day: new Date(entry.dt * 1000).toLocaleDateString("en-US", {
              weekday: "short",
            }),
            temp: Math.round(entry.main.temp),
            condition: entry.weather[0].main,
          }));

        setForecast(dailyForecast);
        setError("");
      } catch (err) {
        console.error("Error fetching forecast:", err);
        setError("Failed to fetch forecast data.");
      }
    };

    getForecast();
  }, [lat, lon]);

  if (error) {
    return <p className="error-message">{error}</p>;
  }

  return (
    <div className="five-day-forecast">
      {forecast.map((day, index) => (
        <motion.div
          key={index}
          className="forecast-card"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          whileHover={{ scale: 1.1 }}
        >
          <p className="day">{day.day}</p>
          <FontAwesomeIcon icon={getWeatherIcon(day.condition)} size="2x" />
          <p className="temp">{day.temp}°C</p>
        </motion.div>
      ))}
    </div>
  );
};

export default FiveDayForecast;
