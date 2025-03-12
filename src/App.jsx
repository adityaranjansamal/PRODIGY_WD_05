import React, { useEffect, useState } from "react";
import { fetchWeather } from "./api";
import SearchBar from "./components/SearchBar";
import WeatherCard from "./components/WeatherCard";
import "./styles/WeatherCard.scss";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { motion } from "framer-motion";
import FiveDayForecast from "./components/FiveDayForecast";

const App = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(false);

  const fetchCurrentLocationWeather = () => {
    navigator.geolocation.getCurrentPosition(async (position) => {
      const { latitude, longitude } = position.coords;
      const data = await fetchWeather(`${latitude},${longitude}`);
      if (data) {
        setWeatherData(data);
        setError(false);
      } else {
        setError(true);
      }
    });
  };

  useEffect(() => {
    fetchCurrentLocationWeather();
  }, []);

  const handleSearch = async (city) => {
    const data = await fetchWeather(city);
    if (data) {
      setWeatherData(data);
      setError(false);
    } else {
      setError(true);
    }
  };

  return (
    <div className="app">
      <Header />
      <SearchBar onSearch={handleSearch} />
      {error ? (
        <motion.div className="error-message">
          <p>❌ Something went wrong, check if the city is correct!</p>
        </motion.div>
      ) : (
        weatherData && <WeatherCard weatherData={weatherData} />
      )}

      {weatherData?.coord && (
        <FiveDayForecast
          lat={weatherData.coord.lat}
          lon={weatherData.coord.lon}
        />
      )}
      <Footer />
    </div>
  );
};

export default App;
